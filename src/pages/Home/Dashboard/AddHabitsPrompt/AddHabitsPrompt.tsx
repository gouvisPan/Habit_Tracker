import "./AddHabitsPrompt.scss";
import { BsFillPatchExclamationFill } from "react-icons/bs";
import useWindowSize from "../../../../hooks/useWindowSize";
import Header from "../../../../components/Header/Header";

const AddHabitsPrompt = () => {
  const [height, width] = useWindowSize();

  return (
    <div className="prompt-container">
      {width < 701 && <Header />}
      <h2>No Habits to track!</h2>

      <div className="prompt-container__msg">
        <BsFillPatchExclamationFill className="prompt-container__msg--icon" />
        <span>Please add your first habit to start tracking your progress</span>
      </div>
    </div>
  );
};

export default AddHabitsPrompt;
