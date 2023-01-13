import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import AddHabit from "./AddHabit/AddHabit";
import Dashboard from "./Dashboard/Dashboard";
import "./Home.scss";
import InfoBlock from "./InfoBlock/InfoBlock";

const Home = () => {
  const isUserLoading = useAppSelector((state) => state.user.isLoading);
  return (
    <div className="home-container">
      {!isUserLoading && <Dashboard />}
      <div className="home-container__middle">
        <AddHabit />
        <InfoBlock />     
      </div>
    </div>
  );
};

export default Home;
