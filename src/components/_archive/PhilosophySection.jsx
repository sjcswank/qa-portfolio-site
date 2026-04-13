import { forwardRef } from 'react';
import Section from '../components/Section';
import HoverButton from '../components/HoverButton';
import PhilosophyCard from '../components/PhilosophyCard';
import { philosophyPillars } from '../data/philosophyPillars';

const PhilosophySection = forwardRef(({
  isVisible,
  color
}, ref) => {
  return (
    <Section id="philosophy" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color }}>
          Ethical Testing
        </h2>

        <div className="bg-gray-800/50 border-l-4 p-6 mb-12 rounded-r-lg" style={{ borderColor: color }}>
          <p className="text-base md:text-lg text-gray-300 italic">
            I didn't get into QA just because I love automation (though I do)—I got into it because I want to help people. Technology should make our lives genuinely better, and as someone who tests it, I have a responsibility to make sure it does.
          </p>
        </div>

        <div className="space-y-6 text-base md:text-lg text-gray-300 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">First, Do No Harm. Then, Improve.</h3>
          <p>
            Does this technology cause harm? Does it actually benefit people? Is it accessible? Is it ethical? These are the questions that should be at the heart of software testing—questions that require empathy, critical thinking, and genuine concern for human wellbeing.
            AI is already transforming our field by handling the tedious, repetitive automation work, and that means human testers can redirect that recovered time toward what actually matters. QA should be leading the charge on ethical technology design right now, not waiting for permission or for the industry to catch up.
          </p>
          <p>I believe the role of QA is evolving from "does it work?" to "should it work this way?" We're not just checking if buttons work or APIs return the right response—we're the ones who should be asking the hard questions about impact, accessibility, and ethics before technology reaches users.</p>
          <p>If you're thinking about these things too, or if you're already doing this work, I'd love to hear from you.</p>
        </div>

        <div className="flex justify-center mb-12">
          <HoverButton
            href="mailto:heatherlynn.frank@gmail.com?subject=Ethical%20Testing&body=Hi%20Heather%2C%0A%0AI%20read%20your%20thoughts%20on%20ethical%20testing%20and%20wanted%20to%20connect...%0A%0A"
            color={color}
            variant="solid"
          >
            Let's Talk Ethics
          </HoverButton>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {philosophyPillars.map((pillar, index) => (
            <PhilosophyCard
              key={index}
              title={pillar.title}
              description={pillar.description}
              color={color}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

PhilosophySection.displayName = 'PhilosophySection';

export default PhilosophySection;
