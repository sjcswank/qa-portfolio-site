import { useState, useEffect, useRef } from 'react';
import { ChevronUp, Menu, X } from 'lucide-react';
import { sections } from './data/sections';

// SWAP HERO COMPONENT HERE — uncomment the variant you want active
// import HeroWithoutPhoto from './sections/HeroWithoutPhoto';
import HeroWithPhoto from './sections/HeroWithPhoto';

import AboutSection from './sections/AboutSection';
import PhilosophySection from './sections/PhilosophySection';
// import LearningSection from './sections/LearningSection'; // temporarily hidden
import ContactSection from './sections/ContactSection';

const QAPortfolio = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set([0]));
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [shouldBounce, setShouldBounce] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionsRef = useRef([]);
  const bounceTimeoutRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    document.title = "Heather Frank - Ethical AI Practitioner";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = "Heather Frank, Ethical AI Practitioner. Designing AI solutions for people, not just users — built to help, held to a higher standard.";
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu on Escape key or click outside
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (isMenuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const triggerBounce = () => {
    setShouldBounce(true);
    if (bounceTimeoutRef.current) {
      clearTimeout(bounceTimeoutRef.current);
    }
    bounceTimeoutRef.current = setTimeout(() => {
      setShouldBounce(false);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setShowScrollTop(scrollPosition > 300);
      triggerBounce();
      setIsMenuOpen(false);

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
            setActiveSection(index);
          }
          if (rect.top < windowHeight * 0.8) {
            setVisibleSections(prev => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (bounceTimeoutRef.current) {
        clearTimeout(bounceTimeoutRef.current);
      }
    };
  }, []);

  const scrollToSection = (index) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    triggerBounce();
  };

  const getCurrentColor = () => sections[activeSection]?.color || sections[0].color;

  const edgeGlowStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    boxShadow: `inset 0 0 100px ${getCurrentColor()}20`,
    transition: 'box-shadow 0.8s ease',
    zIndex: 1,
    border: isMobile ? `1px solid ${getCurrentColor()}40` : `2px solid ${getCurrentColor()}40`,
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded"
      >
        Skip to main content
      </a>

      <div style={edgeGlowStyle} />

      {/* Top Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(0);
            }}
            className="text-xl font-bold hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Heather Frank
          </a>

          {/* Desktop Nav Links - hidden on mobile */}
          <div className="hidden md:flex gap-8 items-center">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(index);
                }}
                className="text-sm hover:opacity-80 transition-opacity relative group"
                style={{
                  color: activeSection === index ? section.color : '#9CA3AF'
                }}
              >
                {section.name}
                <div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left transition-transform duration-300"
                  style={{
                    backgroundColor: section.color,
                    transform: activeSection === index ? 'scaleX(1)' : 'scaleX(0)',
                    transition: 'transform 0.3s ease, background-color 0.8s ease'
                  }}
                />
                {activeSection !== index && (
                  <div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: section.color }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Hamburger Button - visible on mobile */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(index);
                  setIsMenuOpen(false);
                }}
                className="text-base py-2 transition-colors"
                style={{
                  color: activeSection === index ? section.color : '#9CA3AF'
                }}
              >
                {section.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Side Navigation Dots - hidden on mobile */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 hidden md:flex">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(index);
              }}
              className="group relative"
              aria-label={`Go to ${section.name}`}
            >
              <div
                className="w-3 h-3 rounded-full border-2 transition-all duration-500"
                style={{
                  borderColor: activeSection === index ? section.color : '#4B5563',
                  backgroundColor: activeSection === index ? section.color : 'transparent',
                  transform: activeSection === index ? 'scale(1.3)' : 'scale(1)',
                  boxShadow: activeSection === index ? 'none' : '0 0 0 0 transparent'
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== index) {
                    e.currentTarget.style.borderColor = section.color;
                    e.currentTarget.style.boxShadow = `0 0 8px ${section.color}80`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== index) {
                    e.currentTarget.style.borderColor = '#4B5563';
                    e.currentTarget.style.boxShadow = '0 0 0 0 transparent';
                  }
                }}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none">
                <Icon className="inline w-4 h-4 mr-2" />
                {section.name}
              </div>
            </a>
          );
        })}
      </div>

      {/* Sections */}
      {/* SWAP HERO COMPONENT HERE — change HeroWithoutPhoto to HeroWithPhoto (or vice versa) */}
      <HeroWithPhoto
        ref={el => sectionsRef.current[0] = el}
        isVisible={visibleSections.has(0)}
        color={sections[0].color}
        scrollToSection={scrollToSection}
      />

      <AboutSection
        ref={el => sectionsRef.current[1] = el}
        isVisible={visibleSections.has(1)}
        color={sections[1].color}
      />

      <PhilosophySection
        ref={el => sectionsRef.current[2] = el}
        isVisible={visibleSections.has(2)}
        color={sections[2].color}
      />

      {/* LearningSection temporarily hidden — restore when ready:
      <LearningSection
        ref={el => sectionsRef.current[3] = el}
        isVisible={visibleSections.has(3)}
        color={sections[3].color}
      /> */}

      <ContactSection
        ref={el => sectionsRef.current[3] = el}
        isVisible={visibleSections.has(3)}
        color={sections[3].color}
      />

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(0);
          }}
          className={`block text-gray-400 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded ${
            showScrollTop ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${shouldBounce ? 'animate-bounce' : ''}`}
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-8 h-8" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 pb-24 text-center text-gray-400 text-xs md:text-sm">
        <p className="mb-2">&copy; {new Date().getFullYear()} Heather Frank. All rights reserved.</p>
        <p>Last Updated: April 2026</p>
      </footer>
    </div>
  );
};

export default QAPortfolio;
