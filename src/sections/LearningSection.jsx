import { forwardRef } from 'react';
import Section from '../components/Section';
import { learningMilestones } from '../data/learningMilestones';

const LearningSection = forwardRef(({
  isVisible,
  color,
}, ref) => {
  return (
    <Section id="learning" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full">

        <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color }}>
          Learning in Public
        </h2>
        <p className="text-base md:text-lg text-gray-500 mb-12">
          Current work — updated as I go
        </p>

        <div className="space-y-8">
          {learningMilestones.map((milestone) => (
            <div
              key={milestone.id}
              className="bg-gray-800/60 rounded-lg p-6 md:p-8 border-l-4"
              style={{ borderColor: color }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span
                  className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: `${color}20`, color }}
                >
                  {milestone.status}
                </span>
                <span className="text-xs text-gray-500">{milestone.year}</span>
              </div>

              <h3 className="text-base md:text-lg font-semibold mb-1">
                {milestone.course}
              </h3>
              <p className="text-sm font-medium mb-6" style={{ color }}>
                {milestone.organization}
              </p>

              <div className="bg-gray-900/50 rounded-lg p-5 mb-6">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-gray-300 block mb-2">About LaunchCode</strong>
                  {milestone.orgDescription}
                </p>
              </div>

              <div className="space-y-4 text-sm md:text-base text-gray-400">
                <p>
                  <strong className="text-gray-300">What I'm building: </strong>
                  {milestone.whatImLearning}
                </p>
                <p>
                  <strong className="text-gray-300">Why it matters to me: </strong>
                  {milestone.communityConnection}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/*
          To add future learning milestones, add a new entry object to
          src/data/learningMilestones.js — this section will render it automatically.
        */}

      </div>
    </Section>
  );
});

LearningSection.displayName = 'LearningSection';

export default LearningSection;
