import { RefObject, useEffect } from "react";

export const useScroll = (
  elementRef: RefObject<HTMLDivElement>,
  dependencies: any[]
) => {
  const scrollToBottom = () => {
    if (elementRef.current)
      elementRef.current.scrollTop = elementRef.current.scrollHeight;
  };
  useEffect(() => {
    scrollToBottom();
  }, dependencies);
  return scrollToBottom;
};
