import React from "react";
import AddHabit from "./AddHabit/AddHabit";
import Dashboard from "./Dashboard/Dashboard";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <AddHabit />
      <Dashboard />
    </div>
  );
};

export default Home;
