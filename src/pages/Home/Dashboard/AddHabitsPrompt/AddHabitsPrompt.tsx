import React from "react";
import './AddHabitsPrompt.scss'
import {BsFillPatchExclamationFill} from 'react-icons/bs'

const AddHabitsPrompt = () => {
  return <div className="prompt-container">
    <h2>No Habits to track!</h2>
    <div className="prompt-container__msg" >
      <BsFillPatchExclamationFill className="prompt-container__msg--icon"/>
      <span>Please add your first habit to start tracking your progress</span>
    </div>
  </div>;
};

export default AddHabitsPrompt;
