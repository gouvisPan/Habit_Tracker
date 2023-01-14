import React, { useState } from "react";
import { HabitStatistics } from "../../../../../model/interfaces/HabitStatistics";
import "./IndividualHabitStats.scss";
interface IndividualHabitStatsProps {
  habitStats: HabitStatistics;
}

const IndividualHabitStats: React.FC<IndividualHabitStatsProps> = (props) => {
  return (
    <div className="stat-container">
      <div className={`stat-container__content`}>
        <h1>{props.habitStats.name}</h1>
        <div className="stat-container__content--goal">
          <span>Goal: </span>
          <h2>{props.habitStats.consistensyGoal.toFixed(2)}%</h2>
        </div>
        <div className="stat-container__content--current">
          <span>Current: </span>
          <h2>{props.habitStats.currentPercentage.toFixed(2)}%</h2>
        </div>
      </div>
      <div
        className="stat-container__bg"
        style={{
          transform: `translateX(${
            props.habitStats.currentPercentage - 100
          }%) `,
        }}
      ></div>
      <div
        className="stat-container__goal"
        style={{
          transform: `translateX(${props.habitStats.consistensyGoal - 100}%) `,
        }}
      >
        <span>goal</span>
      </div>
    </div>
  );
};

export default IndividualHabitStats;
