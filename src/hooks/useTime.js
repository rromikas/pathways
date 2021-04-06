import { useEffect, useRef, useState } from "react";

const useTime = () => {
  const timeoutRef = useRef(null);
  const [stopped, setStopped] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    if (!stopped) {
      timeoutRef.current = setTimeout(() => {
        setTime(new Date());
      }, 1000);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [time]);

  return { time, stopTimer: () => (!stopped ? setStopped(true) : {}) };
};

export default useTime;
