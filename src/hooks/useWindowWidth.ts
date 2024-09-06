import { useCallback, useState } from "react";
import useEventListener from "./useEventListener";

const isBrowser = typeof document !== "undefined";

export default function useWindowWidth(): number | null {
  const [windowWidth, setWindowWidth] = useState(
    isBrowser ? window.innerWidth : null
  );

  const getWindowWidth = useCallback(
    () => setWindowWidth(window.innerWidth),
    []
  );

  useEventListener(isBrowser ? window : null, "resize", getWindowWidth);

  return windowWidth;
}
