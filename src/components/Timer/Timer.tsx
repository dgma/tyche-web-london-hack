import { forwardRef, useImperativeHandle } from "react";
import { useTimer } from "react-timer-hook";

const startTime = new Date();

export type TimerHandle = {
  restartTimer: () => void;
};

interface TimeProps {
  timerValueInMin: number;
}

const Time = forwardRef<TimerHandle, TimeProps>(
  ({ timerValueInMin = 10 }, ref) => {
    const { seconds, minutes, restart } = useTimer({
      expiryTimestamp: startTime,
      onExpire: () => console.warn("onExpire called"),
    });

    useImperativeHandle(
      ref,
      () => {
        return {
          restartTimer: () => {
            const startTime = new Date();
            startTime.setMinutes(startTime.getMinutes() + timerValueInMin);
            restart(startTime);
          },
        };
      },
      [restart],
    );

    return (
      <div className="flex justify-center gap-x-4">
        <p className="text-sm">Time before the next update</p>
        <p className="text-sm">
          <span>{minutes}</span>:<span>{seconds}</span>
        </p>
      </div>
    );
  },
);

export default Time;
