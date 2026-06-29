import { ChevronRight, Edit3, Info } from "lucide-react";
import { HabitIcon } from "../components/HabitIcon";
import { Header } from "../components/Header";
import { MonthlyHabitSection } from "../components/MonthlyHabitSection";
import { Screen } from "../components/Screen";
import { SectionTitle } from "../components/SectionTitle";
import { dailyChallenges, habits } from "../data/habits";
import styles from "./HabitsPage.module.css";

export function HabitsPage() {
  return (
    <Screen>
      <Header title="Seus Hábitos" subtitle="Sábado, 27 de junho" />
      <div className={styles.page}>
        <article className={styles.streakCard}>
          <span className={styles.flameBubble} aria-hidden="true">
            🔥
          </span>
          <div className={styles.streakCopy}>
            <span className={styles.micro}>
              Sequência atual <Info size={10} />
            </span>
            <strong>14 dias</strong>
            <small>Mantenha sua sequência!</small>
          </div>
          <div className={styles.progressTrack}>
            <span />
          </div>
          <div className={styles.streakStats}>
            <p>
              <strong>14</strong>
              <span>Dias ativos</span>
            </p>
            <p>
              <strong>11</strong>
              <span>Dias perfeitos</span>
            </p>
            <p>
              <strong>14</strong>
              <span>Check-ins</span>
            </p>
          </div>
        </article>

        <section className={`${styles.card} ${styles.habitsCard}`}>
          <SectionTitle
            title="Hábitos de hoje"
            action={
              <button className={styles.iconButton} type="button" aria-label="Editar hábitos">
                <Edit3 size={15} />
              </button>
            }
          />
          <div className={styles.habitGrid}>
            {habits.map((habit) => (
              <HabitIcon key={habit.name} habit={habit} />
            ))}
          </div>
          <p className={styles.tip}>💡 Toque em um hábito para registrar seu progresso.</p>
          <p className={styles.completion}>2/5 concluídos</p>
        </section>

        <section className={`${styles.card} ${styles.challengeCard}`}>
          <SectionTitle
            title="Desafio do Dia"
            subtitle="Exercite sua mente todos os dias."
            action={
              <button className={styles.rankingButton} type="button">
                Ver ranking 🏆
              </button>
            }
          />
          <div className={styles.challengeGrid}>
            {dailyChallenges.map(({ title, subtitle, badge, cta, thumbnail, imageSrc, emoji }) => (
              <button key={title} className={styles.challengeTile} type="button">
                <span className={styles.challengeIcon}>
                  {thumbnail === "image" && imageSrc ? (
                    <img src={imageSrc} alt="" />
                  ) : (
                    <span className={styles.challengeEmoji}>{emoji}</span>
                  )}
                </span>
                <span className={styles.challengeText}>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </span>
                <span className={styles.challengeCta}>
                  <em>{badge}</em>
                  <b>{cta}</b>
                  <ChevronRight size={16} />
                </span>
              </button>
            ))}
          </div>
          <div className={styles.challengeFooter}>
            <span>
              🕘 Próxima palavra em <strong>07:30:50</strong>
            </span>
            <span>
              📈 Porcentagem de vitórias <strong>100%</strong>
            </span>
          </div>
        </section>

        <MonthlyHabitSection />
      </div>
    </Screen>
  );
}
