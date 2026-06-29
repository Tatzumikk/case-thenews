export type CalendarDay = {
  day: number;
  state: "active" | "perfect" | "inactive" | "currentInactive" | "future";
};

export const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

export const calendarDays: CalendarDay[] = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;
  if ([9, 10, 11, 12, 13, 14].includes(day)) return { day, state: "perfect" };
  if ([1, 2, 3, 4, 5, 6, 7, 8].includes(day)) return { day, state: "active" };
  if (day === 27) return { day, state: "currentInactive" };
  if ([28, 29, 30].includes(day)) return { day, state: "future" };
  return { day, state: "inactive" };
});

export const leadingDays = [31];
export const trailingDays = [1, 2, 3, 4];
