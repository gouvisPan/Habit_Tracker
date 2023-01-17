import React, { Fragment } from "react";
import { Habit } from "../../../../model/Habit";
import "./HabitRow.scss";
import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../../hooks/hooks";

import { habitActions } from "../../../../store/reducers/habitSlice";
import { removeHabit } from "../../../../store/actions/habit-actions";

interface HabitRowProps {
  habit: Habit;
}

const HabitRow: React.FC<HabitRowProps> = (props) => {
  const habit: Habit = props.habit;
  const dispatch = useAppDispatch();

  const clickStateHandler = (i: number) => {
    const newState = [...habit.weeklyState];
    newState[i] = !habit.weeklyState[i];
    const newHabit = { ...habit };
    newHabit.weeklyState = newState;
    dispatch(habitActions.updateHabit(newHabit));
  };

  const deleteClickHandler = () => {
    dispatch(removeHabit(habit.id));
  };

  return (
    <Fragment>
      <div className="row-container">
        <div className="row-container__habit-name">{habit.name} </div>
        <div className="row-container--week">
          {habit.weeklyState.map((day, i) => (
            <div className="checkbox-wrapper" key={i}>
              <div
                className="row-container--week__habit-checkbox"
                onClick={() => clickStateHandler(i)}
                key={i}
              >
                <input type="checkbox" checked={day} />
                <label></label>
              </div>
            </div>
          ))}
        </div>
        <div className="row-container__icon-wrapper">
          <div className="row-container__icon" onClick={deleteClickHandler}>
            <AiFillDelete className="row-container__icon--del" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HabitRow;
