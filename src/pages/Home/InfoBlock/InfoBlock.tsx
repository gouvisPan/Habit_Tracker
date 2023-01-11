import React from "react";
import logo from "../../../assets/logo-no-bg.png";
import "./InfoBlock.scss";

const InfoBlock = () => {
  return (
    <div className="info-block">
      <img src={logo} alt="GoalTrack logo" className="info-block__logo" />
      <p>
        Track your progression in your new hobies. Click 'New Week' to save past
        Data and start a fresh week! Check your hobies adhearence and Statistics
        in the coresponding profile section!{" "}
      </p>
    </div>
  );
};

export default InfoBlock;
