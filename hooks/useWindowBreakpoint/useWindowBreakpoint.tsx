import React, { useCallback, useEffect, useState } from "react";

export default function useWindowBreakpoint(breakpoint: number) {
  const [matched, setMatched] = useState(false);
  const update = useCallback((e: MediaQueryListEvent) => {
    setMatched(e.matches);
  }, []);

  useEffect(() => {
    const media = matchMedia(`(max-width: ${breakpoint}px)`);
    media.addEventListener("change", (e) => update(e));
    if (media.matches) setMatched(true);
    return () => {
      media.removeEventListener("change", (e) => update(e));
    };
  }, [breakpoint, update]);

  return matched;
}
