import { forwardRef } from 'react';
import Section from '../components/Section';
import ToolCard from '../components/ToolCard';
import { toolCategories } from '../data/tools';

const ToolsSection = forwardRef(({
  isVisible,
  color
}, ref) => {
  return (
    <Section id="tools" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color }}>
          The Toolkit
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          Building custom testing solutions through collaboration, selecting tools that serve both technical requirements and human needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {toolCategories.map((category, index) => (
            <ToolCard
              key={index}
              title={category.title}
              description={category.description}
              tools={category.tools}
              color={color}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

ToolsSection.displayName = 'ToolsSection';

export default ToolsSection;
