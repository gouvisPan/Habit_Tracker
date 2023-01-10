import React, { Fragment } from 'react'
import { Habit } from '../../../../model/Habit'
import './HabitRow.scss'

interface HabitRowProps{
    habit: Habit
}

const HabitRow:React.FC<HabitRowProps> = (props) => {
    const habit: Habit = props.habit;

  return (
    <Fragment>
        <span className='dash-container__habit-name'>{habit.name}</span>
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
        <input type="checkbox" />
    </Fragment>
  )
}

export default HabitRow