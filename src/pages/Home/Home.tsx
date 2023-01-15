import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import useWindowSize from "../../hooks/useWindowSize";
import AddHabit from "./AddHabit/AddHabit";
import Dashboard from "./Dashboard/Dashboard";

import "./Home.scss";
import InfoBlock from "./InfoBlock/InfoBlock";

const Home = () => {
  const isUserLoading = useAppSelector((state) => state.user.isLoading);
  const [height, width] = useWindowSize();

  return (
    <div className="home-container">
      {!isUserLoading && <Dashboard />}
      <div className="home-container__middle">
        <AddHabit />
        {width > 701 && <InfoBlock />}
      </div>
    </div>
  );
};

export default Home;
