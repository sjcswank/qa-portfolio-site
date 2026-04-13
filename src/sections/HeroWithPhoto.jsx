import { forwardRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Section from '../components/Section';
import HoverButton from '../components/HoverButton';
import SocialLink from '../components/SocialLink';

// HeroWithPhoto — layout includes a clearly labeled headshot placeholder region.
// To swap hero variants, see QAPortfolio.jsx // SWAP HERO COMPONENT HERE

const HeroWithPhoto = forwardRef(({
  isVisible,
  color,
  scrollToSection,
}, ref) => {
  return (
    <Section id="hero" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full pt-20" id="main-content">

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Recommended: round crop, min 400×400px, neutral or outdoor background */}
          <div className="flex-shrink-0">
            <img
              src="/headshot.jpg"
              alt="Heather Frank"
              className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover"
            />
          </div>


          <div className="text-center md:text-left flex-grow">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              Ethical AI Practitioner
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Heather Frank
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-400 mb-10"
              style={{ lineHeight: '1.8' }}
            >
              Designing for people, not users.
            </p>

            <HoverButton
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(3);
              }}
              color={color}
              variant="solid"
            >
              Let's Work Together
            </HoverButton>

            <div className="flex gap-6 justify-center md:justify-start mt-10">
              <SocialLink
                href="https://github.com/sjcswank"
                icon={Github}
                label="Visit Heather Frank's GitHub profile"
              />
              <SocialLink
                href="https://linkedin.com/in/heatherlynnfrank"
                icon={Linkedin}
                label="Visit Heather Frank's LinkedIn profile"
              />
              <SocialLink
                href="mailto:heatherlynn.frank@gmail.com"
                icon={Mail}
                label="Send email to Heather Frank"
                external={false}
              />
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
});

HeroWithPhoto.displayName = 'HeroWithPhoto';

export default HeroWithPhoto;
