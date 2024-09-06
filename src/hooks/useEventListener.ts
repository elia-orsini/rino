import { useEffect } from "react";

type GlobalAndWindowEventHandlersEventMap = WindowEventHandlersEventMap &
  GlobalEventHandlersEventMap;

export default function useEventListener(
  element: Element | null,
  type: string,
  listener: EventListenerOrEventListenerObject
): void;

export default function useEventListener<
  U extends keyof GlobalAndWindowEventHandlersEventMap,
>(
  element: Window | null,
  type: U,
  listener: (event: GlobalAndWindowEventHandlersEventMap[U]) => void
): void;

export default function useEventListener<U extends keyof DocumentEventMap>(
  element: Document | null,
  type: U,
  listener: (event: DocumentEventMap[U]) => void
): void;

export default function useEventListener(
  element: Element | Window | Document | null,
  type: string,
  listener: EventListenerOrEventListenerObject | ((event: Event) => void)
): void {
  useEffect(() => {
    if (!element) {
      return undefined;
    }

    element.addEventListener(type, listener);

    return () => {
      element.removeEventListener(type, listener);
    };
  }, [element, type, listener]);
}
