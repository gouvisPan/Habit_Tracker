import React, { Fragment, useState } from "react";
import { Habit } from "../../../../model/Habit";
import "./HabitRow.scss";
import { AiFillDelete } from "react-icons/ai";
import { useAppDispatch } from "../../../../hooks/hooks";
import { userActions } from "../../../../store/reducers/userSlice";

interface HabitRowProps {
  habit: Habit;
}

const HabitRow: React.FC<HabitRowProps> = (props) => {
  const habit: Habit = props.habit;
  const [weeklyState, setWeeklyState] = useState<boolean[]>(habit.weeklyState);
  const dispatch = useAppDispatch();

  const clickStateHandler = (i: number) => {
    const newState = [...weeklyState];
    newState[i] = !weeklyState[i];
    setWeeklyState(newState);
  };

  const deleteClickHandler = () => {
    dispatch(userActions.removeHabit(habit.id));
  };

  return (
    <Fragment>
      <div className="dash-container__habit-name">{habit.name} </div>
      {weeklyState.map((day, i) => (
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
