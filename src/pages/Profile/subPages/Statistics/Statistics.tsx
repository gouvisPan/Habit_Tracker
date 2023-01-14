import React from "react";
import { calculateHabitsStats } from "../../../../helpers/calculateHabitSats";
import { useAppSelector } from "../../../../hooks/hooks";
import IndividualHabitStats from "./IndividiualHabitStats/IndividualHabitStats";
import "./Statistics.scss";

const Statistics = () => {
  const habitsStats = useAppSelector((state) => calculateHabitsStats(state));
  console.log(habitsStats);
  return (
    <div className="statistics">
      {habitsStats.length === 0 && (
        <h1 className="statistics__no-habit">
          Please add a Habit in order to see its progress here!
        </h1>
      )}
      {habitsStats?.map((stats) => (
        <IndividualHabitStats habitStats={stats} key={stats.id} />
      ))}
    </div>
  );
};

export default Statistics;
