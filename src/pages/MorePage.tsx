import { ChevronRight } from "lucide-react";
import { Header } from "../components/Header";
import { MenuCard } from "../components/MenuCard";
import { Screen } from "../components/Screen";
import { SectionTitle } from "../components/SectionTitle";
import { accountItems, communityItems, exploreItems, summaryItems, todayActions } from "../data/menu";
import styles from "./MorePage.module.css";

export function MorePage() {
  return (
    <Screen>
      <Header title="Mais" subtitle="Tudo do the news em um só lugar" showDivider={false} />
      <div className={styles.page}>
        <section className={styles.summary}>
          {summaryItems.map(({ title, subtitle, emoji, Icon, tone }) => (
            <article key={title}>
              <span className={tone === "yellow" ? styles.summaryYellowIcon : ""} aria-hidden="true">
                {Icon ? <Icon size={27} strokeWidth={2.5} /> : emoji}
              </span>
              <div>
                <strong>{title}</strong>
                <small>{subtitle}</small>
              </div>
            </article>
          ))}
        </section>

        <section className={styles.section}>
          <SectionTitle
            title="Para hoje"
            action={
              <button className={styles.textButton} type="button">
                Ver tudo <ChevronRight size={11} />
              </button>
            }
          />
          <div className={styles.todayGrid}>
            {todayActions.map((item) => (
              <MenuCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle title="Explorar" />
          <div className={styles.wideGrid}>
            {exploreItems.map((item) => (
              <MenuCard key={item.title} {...item} variant="wide" />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle title="Comunidade e recompensas" />
          <div className={styles.communityGrid}>
            {communityItems.map((item) => (
              <MenuCard key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <SectionTitle title="Conta" />
          <div className={styles.accountList}>
            {accountItems.map(({ title, subtitle, emoji, Arrow }) => (
              <button key={title} className={styles.accountItem} type="button">
                <span aria-hidden="true">{emoji}</span>
                <div>
                  <strong>{title}</strong>
                  <small>{subtitle}</small>
                </div>
                <Arrow size={15} />
              </button>
            ))}
          </div>
        </section>
      </div>
    </Screen>
  );
}
