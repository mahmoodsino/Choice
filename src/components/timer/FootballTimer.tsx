import { useEffect, useState } from "react";

interface FootballTimerProps {
  minutes: number;
  seconds: number;
  showSec: boolean;
}
export const FootballTimer: React.FC<FootballTimerProps> = ({
  minutes,
  seconds,
  showSec,
}) => {
  const [elapsedTime, setElapsedTime] = useState<number>(
    minutes * 60 + seconds
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (elapsedTime < 5400) {
      interval = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [elapsedTime]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    if (showSec) {
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${minutes.toString().padStart(2, "0")}`;
    }
  };

  return (
    <div>
      <div style={{ width: "60px" }}>{formatTime(elapsedTime)}</div>
    </div>
  );
};
