import { BatteryFull, Signal, Wifi } from "lucide-react";
import { useHeaderHiddenOnScroll } from "./ScrollHeaderContext";
import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
  subtitle?: string;
  showDivider?: boolean;
};

export function Header({ title, subtitle, showDivider = true }: HeaderProps) {
  const isHidden = useHeaderHiddenOnScroll();

  return (
    <header className={`${styles.header} ${isHidden ? styles.hidden : ""}`}>
      <div className={styles.status}>
        <strong>9:41</strong>
        <div className={styles.statusIcons} aria-hidden="true">
          <Signal size={15} strokeWidth={3} />
          <Wifi size={15} strokeWidth={3} />
          <BatteryFull size={18} strokeWidth={2.4} />
        </div>
      </div>
      <div className={styles.titleRow}>
        <div>
          <h1>{title}</h1>
          {subtitle ? <p>{subtitle}</p> : null}
        </div>
        <span className={styles.avatar}>VA</span>
      </div>
      {showDivider ? <span className={styles.divider} /> : null}
    </header>
  );
}
