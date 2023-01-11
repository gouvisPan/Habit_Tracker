import React from "react";
import dummyHabitsList from "../../../model/tmpData";
import HabitRow from "./HabitRow/HabitRow";
import "./Dashboard.scss";
import { useAppSelector } from "../../../hooks/hooks";
import { Habit } from "../../../model/Habit";

const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "",
];

interface DashboardProps {
  habits: Habit[];
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const clickSaveHandler = () => {};

  return (
    <div className="dash">
      <h1>Weekly Dash</h1>
      <div className="dash-container">
        <div className="dash-container__habit-name-c">
          <span> Habits</span>
        </div>
        {days.map((d) => (
          <span className="dash-container__week-day-name">{d}</span>
        ))}
        {props.habits.map((habit) => (
          <HabitRow habit={habit} />
        ))}
      </div>
      <button onClick={clickSaveHandler}>Save</button>
    </div>
  );
};

export default Dashboard;
