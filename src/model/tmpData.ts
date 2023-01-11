import { Habit } from "./Habit";

const h1: Habit = {
  id: "1",
  name: "Wake Up Early",
  desiredPerc: 100,
  totalDays: 0,
  totalChecks: 0,
  weeklyState: [true, true, true, false, true, false, false],
};
const h2: Habit = {
  id: "2",
  name: "Workout",
  desiredPerc: 80,
  totalDays: 0,
  totalChecks: 0,
  weeklyState: [true, true, true, false, true, false, false],
};
const h3: Habit = {
  id: "3",
  name: "Journaling",
  desiredPerc: 90,
  totalDays: 0,
  totalChecks: 0,
  weeklyState: [true, true, true, false, true, false, false],
};
const h4: Habit = {
  id: "4",
  name: "8 hours of sleep",
  desiredPerc: 100,
  totalDays: 0,
  totalChecks: 0,
  weeklyState: [true, true, true, false, true, false, false],
};

let dummyHabitsList: Habit[] = [h1, h2, h3, h4];

export default dummyHabitsList;
