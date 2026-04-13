import TechTag from './TechTag';

const CaseStudyCard = ({ study, color }) => {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.boxShadow = `0 20px 40px ${color}40`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.boxShadow = 'none';
  };

  const handleButtonMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.border = '2px solid white';
  };

  const handleButtonMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.border = '2px solid transparent';
  };

  return (
    <div
      className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col sm:flex-row gap-6"
      style={{ boxShadow: 'none' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="sm:w-48 sm:flex-shrink-0 order-first sm:order-last">
        <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center text-gray-500">
          [Image]
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-xl md:text-2xl font-semibold mb-3">{study.title}</h3>
        <div className="space-y-3 text-sm md:text-base text-gray-400 mb-4">
          <p><strong className="text-gray-300">Challenge:</strong> {study.challenge}</p>
          <p><strong className="text-gray-300">Impact:</strong> {study.impact}</p>
          <p className="font-semibold" style={{ color }}>{study.metric}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {study.tech.map((tech, i) => (
            <TechTag key={i} label={tech} />
          ))}
        </div>
        <a
          href="#"
          className="px-4 py-2 rounded font-semibold transition-all inline-block focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          style={{
            backgroundColor: color,
            color: 'white',
            border: '2px solid transparent'
          }}
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
          aria-label={`View details for ${study.title}`}
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default CaseStudyCard;
