import { HabitStatistics } from "../model/interfaces/HabitStatistics";
import { RootState } from "../store/reducers";

export const calculateHabitsStats = (state: RootState) => {
  const { habitList } = state.habits;
  let habitsStats: HabitStatistics[] = [];

  habitList?.forEach((habit) => {
    habitsStats.push({
      id: habit.id,
      name: habit.name,
      consistensyGoal: habit.desiredPerc,
      currentPercentage:
        //(cuurentWeek ckecks + old checks) * 100 / (total days + 7)
        ((habit.weeklyState.reduce(
          (totalW, currentValueW) => totalW + (currentValueW ? 1 : 0),
          0
        ) +
          habit.totalChecks) *
          100) /
        (habit.totalDays + 7),
    });
  });
  return habitsStats;
};
