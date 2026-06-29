import { BookOpen, Flame, Menu, Newspaper, Trophy } from "lucide-react";
import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.css";

const items = [
  { label: "edição", path: "/edicao", Icon: Newspaper, disabled: true },
  { label: "hábitos", path: "/habitos", Icon: Flame },
  { label: "copa", path: "/copa", Icon: Trophy, disabled: true },
  { label: "livros", path: "/livros", Icon: BookOpen, disabled: true },
  { label: "mais", path: "/mais", Icon: Menu },
];

export function BottomNav() {
  return (
    <nav className={styles.nav} aria-label="Navegação principal">
      {items.map(({ label, path, Icon, disabled }) =>
        disabled ? (
          <button key={label} className={styles.item} type="button" aria-label={label}>
            <span className={styles.iconWrap}>
              <Icon size={18} />
            </span>
            <span>{label}</span>
          </button>
        ) : (
          <NavLink
            key={label}
            to={path}
            className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ""}`}
          >
            <span className={styles.iconWrap}>
              <Icon size={18} fill="currentColor" />
            </span>
            <span>{label}</span>
          </NavLink>
        ),
      )}
    </nav>
  );
}
