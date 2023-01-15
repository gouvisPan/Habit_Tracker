import { Habit } from "../model/Habit";

export const renewWeek = (habits: Habit[]) => {
  const newListSTR = JSON.stringify(habits); //Deep copying to copy all the nested objects
  const newList: Habit[] = JSON.parse(newListSTR);

  newList.forEach((habit) => {
    habit.totalDays += 7;
    habit.totalChecks += habit.weeklyState.reduce(
      (total, currentValue) => total + (currentValue ? 1 : 0),
      0
    );

    habit.weeklyState = [false, false, false, false, false, false, false];
  });

  return newList;
};
