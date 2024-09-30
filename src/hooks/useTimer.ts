import {useState, useEffect, useRef, useCallback} from 'react';

interface UseCountdownTimer {
  timeLeft: string;
  isActive: boolean;
  start: (minutes: number, callback: () => void) => void;
}

function useCountdownTimer(p0: number): UseCountdownTimer {
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const callbackRef = useRef<(() => void) | null>(null);

  const start = useCallback((minutes: number, callback: () => void) => {
    if (timerRef.current) clearInterval(timerRef.current);
    const totalSeconds = minutes * 60;
    setTimeLeft(totalSeconds);
    setIsActive(true);
    callbackRef.current = callback;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setIsActive(false);
          if (callbackRef.current) callbackRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const formatTimeLeft = (): string => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${String(seconds).padStart(2, '0')}`;
  };

  return {
    timeLeft: formatTimeLeft(),
    isActive,
    start,
  };
}

export default useCountdownTimer;
