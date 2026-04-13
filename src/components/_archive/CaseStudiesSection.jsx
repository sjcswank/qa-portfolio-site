import { forwardRef } from 'react';
import Section from '../components/Section';
import CaseStudyCard from '../components/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

const CaseStudiesSection = forwardRef(({
  isVisible,
  color
}, ref) => {
  return (
    <Section id="case-studies" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color }}>
          Proven Impact
        </h2>
        <div className="grid grid-cols-1 gap-6 md:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} color={color} />
          ))}
        </div>
      </div>
    </Section>
  );
});

CaseStudiesSection.displayName = 'CaseStudiesSection';

export default CaseStudiesSection;
