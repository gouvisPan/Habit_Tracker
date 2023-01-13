
import "./InfoBlock.scss";

const InfoBlock = () => {
  const totalPerc = 80;

  return (
    <div className="info-block">
      <div className="info-block__perc">
      <span>{totalPerc}%</span>
      <h3>Your overall consistency</h3>
      </div>
    </div>
  );
};

export default InfoBlock;
