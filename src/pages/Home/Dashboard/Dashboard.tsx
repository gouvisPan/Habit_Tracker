import React from "react";
import dummyHabitsList from "../../../model/tmpData";
import HabitRow from "./HabitRow/HabitRow";
import './Dashboard.scss'

const days : string[] = ["Monday" ,"Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const Dashboard = () => {
  return <div className="dash">
         <h1>Weekly Dash</h1>
         <div className="dash-container">
         <div className="dash-container__habit-name-c"><span> Habits</span></div>
         {days.map(d => <span className="dash-container__week-day-name" >{d}</span>)}
         {dummyHabitsList.map(habit => <HabitRow habit={habit}/>)} 
         </div>
  </div>;
};

export default Dashboard;
