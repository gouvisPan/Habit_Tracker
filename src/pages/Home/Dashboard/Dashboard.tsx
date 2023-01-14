import React, { Fragment } from "react";
import HabitRow from "./HabitRow/HabitRow";
import "./Dashboard.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import AddHabitsPrompt from "./AddHabitsPrompt/AddHabitsPrompt";
import {
  renewWeeklyState,
  setHabitList,
} from "../../../store/actions/habit-actions";

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
  const dispatcher = useAppDispatch();
  const habits = useAppSelector((state) => state.habits.habitList);
  const showWeek = habits && habits.length !== 0;

  const clickSaveHandler = () => {
    if (habits) dispatcher(setHabitList(habits));
  };

  const clickNewWeekHandler = () => {
    dispatcher(renewWeeklyState());
  };

  return (
    <div className="dash">
      {!showWeek && <AddHabitsPrompt />}
      {showWeek && (
        <Fragment>
          <h1>Weekly Dash</h1>
          <div className="dash-container">
            <div className="dash-container__habit-name-c">
              <span>My Habits</span>
            </div>
            {days.map((d) => (
              <span className="dash-container__week-day-name" key={d}>
                {d}
              </span>
            ))}
            {habits.map((habit) => (
              <HabitRow habit={habit} key={habit.id} />
            ))}
          </div>
          <div className="dash__buttons">
            <button onClick={clickNewWeekHandler}>New Week</button>
            <button onClick={clickSaveHandler}>Save</button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Dashboard;
