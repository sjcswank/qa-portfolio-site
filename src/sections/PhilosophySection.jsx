import { forwardRef } from 'react';
import Section from '../components/Section';
import PhilosophyCard from '../components/PhilosophyCard';
import { philosophyPillars } from '../data/philosophyPillars';

const PhilosophySection = forwardRef(({
  isVisible,
  color,
}, ref) => {
  return (
    <Section id="philosophy" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full">

        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color }}>
          What I Believe
        </h2>

        <div className="bg-gray-800/50 border-l-4 p-6 mb-12 rounded-r-lg" style={{ borderColor: color }}>
          <p className="text-base md:text-lg text-gray-300 italic">
            Ethical AI isn't a checklist. It's a habit of asking whose interests are centered at every decision point — and being willing to let the answer change what you build.
          </p>
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
