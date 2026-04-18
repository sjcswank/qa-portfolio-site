import { forwardRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Section from '../components/Section';
import HoverButton from '../components/HoverButton';
import SocialLink from '../components/SocialLink';

// HeroWithoutPhoto — clean, balanced layout with no photo element
// This is not a hidden placeholder — the composition stands on its own.
// To swap hero variants, see QAPortfolio.jsx // SWAP HERO COMPONENT HERE

const HeroWithoutPhoto = forwardRef(({
  isVisible,
  color,
  scrollToSection,
}, ref) => {
  return (
    <Section id="hero" ref={ref} isVisible={isVisible}>
      <div className="max-w-3xl w-full text-center pt-20" id="main-content">

        <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
          Civic Technologist
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-10 leading-tight">
          Heather Frank
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-400 mb-16"
          style={{ lineHeight: '1.8' }}
        >
          Building for people, not users.
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

        <div className="flex gap-6 justify-center mt-16">
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
            href="mailto:[heatherlynn.frank@gmail.com]"
            icon={Mail}
            label="Send email to Heather Frank"
            external={false}
          />
        </div>

      </div>
    </Section>
  );
});

HeroWithoutPhoto.displayName = 'HeroWithoutPhoto';

export default HeroWithoutPhoto;
