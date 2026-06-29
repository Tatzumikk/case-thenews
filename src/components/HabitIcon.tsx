import { Check } from "lucide-react";
import type { Habit } from "../data/habits";
import styles from "./HabitIcon.module.css";

const statusLabel = {
  done: "Feito",
  pending: "Pendente",
  partial: "Parcial",
};

type HabitIconProps = {
  habit: Habit;
};

export function HabitIcon({ habit }: HabitIconProps) {
  const { Icon } = habit;

  return (
    <button className={`${styles.habit} ${styles[habit.status]}`} type="button">
      <span className={styles.circle}>
        <Icon size={22} />
        {habit.status === "done" ? (
          <span className={styles.check}>
            <Check size={9} strokeWidth={4} />
          </span>
        ) : null}
      </span>
      <strong>{habit.name}</strong>
      <em>{statusLabel[habit.status]}</em>
      <small>{habit.action}</small>
    </button>
  );
}
