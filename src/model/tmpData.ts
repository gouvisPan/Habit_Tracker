import { Habit } from "./Habit";



const h1 : Habit = {  id : "1" , name: "Wake Up Early",currentPerc: 80 ,desiredPerc: 100 }
const h2 : Habit = {  id : "2" , name: "Workout",currentPerc: 60 ,desiredPerc: 80 }
const h3 : Habit = {  id : "3" , name: "Journaling",currentPerc: 100 ,desiredPerc: 90 }
const h4 : Habit = {  id : "4" , name: "8 hours of sleep",currentPerc: 95 ,desiredPerc: 100 }

let dummyHabitsList : Habit[] = [h1,h2,h3,h4];

export default dummyHabitsList;