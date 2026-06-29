import type { PropsWithChildren } from "react";
import styles from "./PhoneFrame.module.css";

export function PhoneFrame({ children }: PropsWithChildren) {
  return (
    <section className={styles.phone} aria-label="Protótipo mobile do app">
      <div className={styles.island} aria-hidden="true">
        <span />
      </div>
      {children}
    </section>
  );
}
