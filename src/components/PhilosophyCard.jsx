const PhilosophyCard = ({ title, description, color }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg border-l-4" style={{ borderColor: color }}>
      <h3 className="text-base md:text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default PhilosophyCard;
