import { ChevronRight } from "lucide-react";
import type { MenuCardData } from "../data/menu";
import styles from "./MenuCard.module.css";

type MenuCardProps = MenuCardData & {
  variant?: "square" | "wide";
};

export function MenuCard({ title, subtitle, emoji, Icon, tone = "emoji", variant = "square" }: MenuCardProps) {
  return (
    <button className={`${styles.card} ${styles[variant]} ${styles[tone]}`} type="button">
      <span className={styles.icon} aria-hidden="true">
        {Icon ? <Icon size={variant === "square" ? 30 : 21} strokeWidth={2.5} /> : emoji}
      </span>
      <span className={styles.copy}>
        <strong>{title}</strong>
        <small>{subtitle}</small>
      </span>
      <ChevronRight className={styles.arrow} size={14} />
    </button>
  );
}
