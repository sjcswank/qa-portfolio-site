import { forwardRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Section from '../components/Section';
import HoverButton from '../components/HoverButton';
import SocialLink from '../components/SocialLink';

const HeroSection = forwardRef(({
  isVisible,
  color,
  scrollToSection
}, ref) => {
  return (
    <Section id="hero" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl text-center pt-20" id="main-content">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Quality Assurance
          <br />
          <span style={{ color }}>That Improves Lives</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Quality Engineering that ensures technology brings real value to real people
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <HoverButton
            href="#case-studies"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(3);
            }}
            color={color}
            variant="solid"
          >
            View My Work
          </HoverButton>
          <HoverButton
            href="#process"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(2);
            }}
            color={color}
            variant="outline-gray"
          >
            See My Process
          </HoverButton>
        </div>
        <div className="flex gap-6 justify-center mt-12">
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
    </Section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
