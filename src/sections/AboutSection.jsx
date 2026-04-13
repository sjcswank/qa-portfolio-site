import { forwardRef } from 'react';
import Section from '../components/Section';

const AboutSection = forwardRef(({
  isVisible,
  color,
}, ref) => {
  return (
    <Section id="about" ref={ref} isVisible={isVisible}>
      <div className="max-w-3xl w-full">

        <h2 className="text-3xl md:text-5xl font-bold mb-12" style={{ color }}>
          About
        </h2>

        <div className="space-y-7 text-base md:text-lg text-gray-300 leading-relaxed">

          <p>
            I'm Heather Frank — Ethical AI Practitioner, automation tester turned AI builder, creative writer, and cat mom of two. My background is in software testing and automation, which taught me to think critically about how technology behaves in the real world, who it affects, and whether it's actually doing what it claims to do. I bring that same scrutiny — and a lot of curiosity — to everything I'm building now.
          </p>

          <p>
            I believe technology should have to earn its place. If a solution can't clearly articulate how it will improve or enhance the human experience, it isn't ready to be built yet. As AI becomes embedded in more decisions, more products, and more systems, the question of whether something should be built matters just as much as how to build it. Ethics isn't a feature to add at the end — it's the foundation the whole thing should rest on.
          </p>

          <p>
            I'm currently building my skills in agentic AI development with a long-term goal of working as a Forward Deploy Engineer — dropping into organizations, designing AI solutions with ethics built in from the start, and leaving them with something that genuinely works for their people. I'm learning in public, building in the open, and looking for collaborators and conversations with people who believe the best technology is the kind that does something genuinely good.
          </p>

        </div>

      </div>
    </Section>
  );
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;
