import { calculateTotalConsistency } from "../../../helpers/calculateTotalConsistensy";
import { useAppSelector } from "../../../hooks/hooks";
import "./InfoBlock.scss";

const InfoBlock = () => {
  const total = useAppSelector((state) => calculateTotalConsistency(state));
  const motivation = useAppSelector((state) => state.user.data?.motivation);
  const totalPerc = total * 100;
  return (
    <div className="info-block">
      <h1>{motivation || "Insert your moto"}</h1>
      <div className="info-block__perc">
        <span>{totalPerc.toFixed()}%</span>
        <h3>Your overall consistency</h3>
      </div>
    </div>
  );
};

export default InfoBlock;
