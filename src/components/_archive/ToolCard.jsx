import TechTag from './TechTag';

const ToolCard = ({ title, description, tools, color }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-2" style={{ color }}>
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, i) => (
          <TechTag key={i} label={tool} />
        ))}
      </div>
    </div>
  );
};

export default ToolCard;
