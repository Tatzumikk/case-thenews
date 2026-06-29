import type { PropsWithChildren, UIEvent } from "react";
import { useRef, useState } from "react";
import { BottomNav } from "./BottomNav";
import { ScrollHeaderContext } from "./ScrollHeaderContext";
import styles from "./Screen.module.css";

export function Screen({ children }: PropsWithChildren) {
  const [headerHidden, setHeaderHidden] = useState(false);
  const lastScrollTop = useRef(0);

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const currentScrollTop = event.currentTarget.scrollTop;
    const delta = currentScrollTop - lastScrollTop.current;

    if (currentScrollTop < 24) {
      setHeaderHidden(false);
    } else if (Math.abs(delta) > 8) {
      setHeaderHidden(delta > 0);
    }

    lastScrollTop.current = currentScrollTop;
  }

  return (
    <div className={styles.screen}>
      <ScrollHeaderContext.Provider value={headerHidden}>
        <div className={styles.content} onScroll={handleScroll}>
          {children}
        </div>
      </ScrollHeaderContext.Provider>
      <BottomNav />
    </div>
  );
}
