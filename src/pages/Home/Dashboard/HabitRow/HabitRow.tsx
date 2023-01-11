import React, { Fragment, useState } from "react";
import { Habit } from "../../../../model/Habit";
import "./HabitRow.scss";
import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../../hooks/hooks";
import { userActions } from "../../../../store/reducers/userSlice";
import { habitActions } from "../../../../store/reducers/habitSlice";

interface HabitRowProps {
  habit: Habit;
}

const HabitRow: React.FC<HabitRowProps> = (props) => {
  const habit: Habit = props.habit;
  const dispatch = useAppDispatch();

  const clickStateHandler = (i: number) => {
    const newState = [...habit.weeklyState];
    newState[i] = !habit.weeklyState[i];
    const newHabit = {...habit}
    newHabit.weeklyState = newState;
    dispatch(habitActions.updateHabit(newHabit))
   
  };

  const deleteClickHandler = () => {
    dispatch(habitActions.removeHabit(habit.id));
  };

  return (
    <Fragment>
      <div className="dash-container__habit-name">{habit.name} </div>
      {habit.weeklyState.map((day, i) => (
        <div
          className="dash-container__habit-checkbox"
          onClick={() => clickStateHandler(i)}
        >
          <input type="checkbox" checked={day} />
          <label></label>
        </div>
      ))}
      <div className="dash-container__icon" onClick={deleteClickHandler}>
        <AiFillDelete />
      </div>
    </Fragment>
  );
};

export default HabitRow;
