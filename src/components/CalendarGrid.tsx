import { ChevronLeft, ChevronRight } from "lucide-react";
import { calendarDays, leadingDays, trailingDays, weekdays } from "../data/calendar";
import styles from "./CalendarGrid.module.css";

export function CalendarGrid() {
  return (
    <article className={styles.calendar}>
      <div className={styles.monthRow}>
        <button type="button" aria-label="Mês anterior">
          <ChevronLeft size={16} />
        </button>
        <strong>Junho 2026</strong>
        <button type="button" aria-label="Próximo mês">
          <ChevronRight size={16} />
        </button>
      </div>
      <div className={styles.weekdays}>
        {weekdays.map((day, index) => (
          <span key={`${day}-${index}`}>{day}</span>
        ))}
      </div>
      <div className={styles.grid}>
        {leadingDays.map((day) => (
          <span key={`leading-${day}`} className={styles.otherMonth}>
            {day}
          </span>
        ))}
        {calendarDays.map((day) => (
          <span key={day.day} className={`${styles.day} ${styles[day.state]}`}>
            {day.day}
            {day.state === "perfect" ? <i aria-hidden="true">★</i> : null}
          </span>
        ))}
        {trailingDays.map((day) => (
          <span key={`trailing-${day}`} className={styles.otherMonth}>
            {day}
          </span>
        ))}
      </div>
      <div className={styles.legend}>
        <span>
          <i className={styles.legendActive} /> Dias ativos
        </span>
        <span>
          <i className={styles.legendPerfect} /> Dias perfeitos
        </span>
        <span>
          <i className={styles.legendInactive} /> Dias inativos
        </span>
      </div>
    </article>
  );
}
