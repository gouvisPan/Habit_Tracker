import React from "react";
import { useAppSelector } from "../../../hooks/hooks";
import "./ToggledInput.scss";

const ToggledInput: React.FC<{ label: string }> = (props) => {
  // const toggled = useAppSelector((state) => state.ui.profileIsLabel);

  return (
    <div className="toggle-container">
      {/* {toggled ? <span>{props.label}</span> : <input value={props.label} />} */}
    </div>
  );
};

export default ToggledInput;
