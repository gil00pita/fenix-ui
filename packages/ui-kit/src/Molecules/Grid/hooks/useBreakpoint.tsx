import { useEffect, useState } from 'react';
import ResponsiveObserve, { ScreenMap } from '@fenix-ui/utils/lib/responsiveObserve';

function useBreakpoint(): ScreenMap {
  const [screens, setScreens] = useState<ScreenMap>({});

  useEffect(() => {
    const token = ResponsiveObserve.subscribe(supportScreens => {
      setScreens(supportScreens);
    });

    return () => ResponsiveObserve.unsubscribe(token);
  }, []);

  return screens;
}

export default useBreakpoint;
