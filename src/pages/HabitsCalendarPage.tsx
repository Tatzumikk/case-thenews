import { ChevronRight, Dumbbell, Trophy } from "lucide-react";
import { CalendarGrid } from "../components/CalendarGrid";
import { Header } from "../components/Header";
import { Screen } from "../components/Screen";
import styles from "./HabitsCalendarPage.module.css";

export function HabitsCalendarPage() {
  return (
    <Screen>
      <Header title="Seus Hábitos" subtitle="Sábado, 27 de junho" />
      <div className={styles.page}>
        <CalendarGrid />

        <section className={styles.metrics}>
          <article>
            <strong className={styles.cyan}>14</strong>
            <span>Dias ativos</span>
            <small>46,7% do mês</small>
          </article>
          <article>
            <strong className={styles.yellow}>6 ★</strong>
            <span>Dias perfeitos</span>
            <small>20% do mês</small>
          </article>
          <article>
            <strong className={styles.yellow}>84</strong>
            <span>Hábitos concluídos</span>
            <small>Média: 2,80/dia</small>
          </article>
        </section>

        <section className={styles.bestCard}>
          <div className={styles.bestHeader}>
            <h2>
              <Trophy size={17} fill="currentColor" /> Seu melhor hábito
            </h2>
            <ChevronRight size={16} />
          </div>
          <div className={styles.bestBody}>
            <span className={styles.bestIcon}>
              <Dumbbell size={28} />
              <i>✓</i>
            </span>
            <div>
              <strong>Exercício</strong>
              <p>Foi seu hábito mais consistente este mês.</p>
            </div>
          </div>
          <div className={styles.bestStats}>
            <p>
              <span>Streak atual</span>
              <strong>6 <small>Dias</small></strong>
            </p>
            <p>
              <span>Maior streak</span>
              <strong>22 <small>Dias</small></strong>
            </p>
            <p>
              <span>Taxa de sucesso</span>
              <strong>22 <small>Dias</small></strong>
            </p>
          </div>
          <p className={styles.motivation}>✨ Continue assim! Você está criando uma rotina incrível!</p>
        </section>
      </div>
    </Screen>
  );
}
