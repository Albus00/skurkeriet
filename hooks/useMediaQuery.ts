import { useEffect, useState } from "react";

/**
 * Determine if a media query condition is true or false.
 * @param {String} mediaQuery The media query to check for, e.g. '(min-width: 450px)'
 * @returns A Boolean representing the media query condition.
 */
export const useMediaQuery = (mediaQuery: string) => {
  const [match, setMatch] = useState(false);
  
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const handler = () => setMatch(Boolean(mediaQueryList.matches));
    mediaQueryList.addEventListener('change', handler);
    handler();
    return () => mediaQueryList.removeEventListener('change', handler);
  }, [mediaQuery]);

  return match;
};