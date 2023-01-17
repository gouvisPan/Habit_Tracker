import React, { Fragment } from "react";
import HabitRow from "./HabitRow/HabitRow";
import "./Dashboard.scss";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import AddHabitsPrompt from "./AddHabitsPrompt/AddHabitsPrompt";
import {
  renewWeeklyState,
  setHabitList,
} from "../../../store/actions/habit-actions";
import useWindowSize from "../../../hooks/useWindowSize";
import Header from "../../../components/Header/Header";

const daysLong: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const daysShort: string[] = ["M", "T", "W", "T", "F", "S", "S"];

const Dashboard2: React.FC<{}> = () => {
  const dispatcher = useAppDispatch();
  const habits = useAppSelector((state) => state.habits.habitList);
  const showWeek = habits && habits.length !== 0;
  const [height, width] = useWindowSize();

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
          <div className="dash__top">
            <h1>Weekly Dash</h1>
            {width < 801 && showWeek && <Header />}
          </div>
          <div className="static">
            <div className="static__habit-name-c">
              <span>{width > 1000 && "My"} Habits</span>
            </div>
            <div className="static__week">
              {width > 800 &&
                daysLong.map((d) => (
                  <span className="static__week--day-name " key={d}>
                    {d}
                  </span>
                ))}
              {width < 801 &&
                daysShort.map((d) => (
                  <span className="static__week--day-name" key={d}>
                    {d}
                  </span>
                ))}
            </div>
            <div className="static__dummy"></div>
          </div>
          <div className="dash-container">
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

export default Dashboard2;
