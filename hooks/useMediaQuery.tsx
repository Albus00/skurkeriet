// Whooshy whooshy Media Query hook that seems to work with server side rendering.
// Found at https://github.com/antonioru/beautiful-react-hooks/issues/316

import { useEffect, useState } from 'react';

const useMediaQuery = (mediaQuery: string): boolean => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);
    const documentChangeHandler = (): void => setIsVerified(!!mediaQueryList.matches);

    try {
      mediaQueryList.addEventListener('change', documentChangeHandler);
    } catch (e) {
      // Safari isn't supporting mediaQueryList.addEventListener
      mediaQueryList.addListener(documentChangeHandler);
    }

    documentChangeHandler();

    return (): void => {
      try {
        mediaQueryList.removeEventListener('change', documentChangeHandler);
      } catch (e) {
        // Safari isn't supporting mediaQueryList.removeEventListener
        mediaQueryList.removeListener(documentChangeHandler);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount

  return isVerified;
};

export default useMediaQuery;