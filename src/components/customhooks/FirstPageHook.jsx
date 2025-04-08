import { useEffect, useRef } from 'react';

const useFirstPageHook = (callback, delay) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let timerId;
    const tick = () => {
      callbackRef.current();
      timerId = setTimeout(tick, delay);
    };
    timerId = setTimeout(tick, delay);
    return () => clearTimeout(timerId);
  }, [delay]);
};

export default useFirstPageHook;