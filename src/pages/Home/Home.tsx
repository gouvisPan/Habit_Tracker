import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import AddHabit from "./AddHabit/AddHabit";
import AddHabitsPrompt from "./Dashboard/AddHabitsPrompt/AddHabitsPrompt";
import Dashboard from "./Dashboard/Dashboard";
import "./Home.scss";
import InfoBlock from "./InfoBlock/InfoBlock";

const Home = () => {


  return (
    <div className="home-container">
      <Dashboard />
      <div className="home-container__middle">
        <AddHabit />
        <InfoBlock />
      </div>
      
    </div>
  );
};

export default Home;
