import type { PropsWithChildren } from "react";
import { PhoneFrame } from "./PhoneFrame";
import styles from "./AppShell.module.css";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <main className={styles.stage}>
      <PhoneFrame>{children}</PhoneFrame>
    </main>
  );
}
