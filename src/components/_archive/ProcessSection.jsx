import { forwardRef } from 'react';
import Section from '../components/Section';
import { processSteps } from '../data/processSteps';

const ProcessSection = forwardRef(({
  isVisible,
  color
}, ref) => {
  return (
    <Section id="process" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color }}>
          The Method
        </h2>
        <div className="space-y-6 md:space-y-8">
          {processSteps.map((step, index) => (
            <div key={index} className="flex gap-4 md:gap-6">
              <div
                className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg md:text-xl"
                style={{
                  backgroundColor: `${color}20`,
                  color: color
                }}
              >
                {index + 1}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
});

ProcessSection.displayName = 'ProcessSection';

export default ProcessSection;
