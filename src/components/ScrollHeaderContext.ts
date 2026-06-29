import { createContext, useContext } from "react";

export const ScrollHeaderContext = createContext(false);

export function useHeaderHiddenOnScroll() {
  return useContext(ScrollHeaderContext);
}
