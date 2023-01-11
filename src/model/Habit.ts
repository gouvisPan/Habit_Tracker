export interface Habit {
  id: string;
  name: string;
  desiredPerc: number;
  totalDays: number;
  totalChecks: number;
  weeklyState: boolean[];
}
