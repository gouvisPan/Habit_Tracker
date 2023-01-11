import React, { Fragment } from "react";
import dummyHabitsList from "../../../model/tmpData";
import HabitRow from "./HabitRow/HabitRow";
import "./Dashboard.scss";
import { useAppSelector } from "../../../hooks/hooks";
import { Habit } from "../../../model/Habit";
import AddHabitsPrompt from "./AddHabitsPrompt/AddHabitsPrompt";

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


const Dashboard: React.FC<{}> = () => {
  const clickSaveHandler = () => {};
  const habits = useAppSelector((state) => state.habits.habitList);

  return (
    <div className="dash">
      {!habits && <AddHabitsPrompt />}
      {habits && 
      <Fragment>
      <h1>Weekly Dash</h1>
      <div className="dash-container">
        <div className="dash-container__habit-name-c">
          <span>My Habits</span>
        </div>
        {days.map((d) => (
          <span className="dash-container__week-day-name">{d}</span>
        ))}
        {habits.map((habit) => (
          <HabitRow habit={habit} />
        ))}
      </div>
      <button onClick={clickSaveHandler}>New Week</button>
      </Fragment>
      }
    </div>
  );
};

export default Dashboard;
