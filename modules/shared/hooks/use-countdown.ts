import { useCallback, useEffect, useState } from 'react';

interface CountdownProps {
  initialTime: number;
  key: string;
}

export const useCountdown = ({ initialTime = 60, key }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const expiry = localStorage.getItem(key);
    if (!expiry) return;

    const remaining = Math.floor((Number(expiry) - Date.now()) / 1000);

    // Si el tiempo ya pasó, limpiamos; si no, activamos
    if (remaining <= 0) return localStorage.removeItem(key);

    setTimeLeft(remaining);
    setIsActive(true);
  }, [key]);

  useEffect(() => {
    if (!isActive || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const nextValue = prev - 1;

        if (nextValue <= 0) {
          setIsActive(false);
          localStorage.removeItem(key);
          return 0;
        }

        return nextValue;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, timeLeft, key]);

  const startCountdown = useCallback(() => {
    const expiryTimestamp = Date.now() + initialTime * 1000;
    localStorage.setItem(key, expiryTimestamp.toString());

    setTimeLeft(initialTime);
    setIsActive(true);
  }, [initialTime, key]);

  return {
    timeLeft,
    startCountdown,
    canResend: !isActive && timeLeft <= 0,
  };
};
