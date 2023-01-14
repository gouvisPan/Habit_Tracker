import { RootState } from "../store/reducers";

export const calculateTotalConsistency = (state: RootState) => {
  const habitList = state.habits.habitList;

  if (!habitList || habitList.length === 0) return 1;

  const totalOnHistory = habitList.reduce(
    (totalOn, currentValue) => totalOn + currentValue.totalChecks,
    0
  );
  const totalHistory = habitList.reduce(
    (total, currentValue) => total + currentValue.totalDays,
    0
  );
  const totalOnCurrent = habitList.reduce(
    (total, currentValue) =>
      total +
      currentValue.weeklyState.reduce(
        (totalW, currentValueW) => totalW + (currentValueW ? 1 : 0),
        0
      ),
    0
  );
  const grandTotal =
    (totalOnCurrent! + totalOnHistory!) / (totalHistory + 7 * habitList.length);

  return grandTotal;
};
