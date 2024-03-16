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
    const { seconds, restart } = useTimer({
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
            startTime.setSeconds(startTime.getSeconds() + timerValueInMin * 60);
            restart(startTime);
          },
        };
      },
      [restart, timerValueInMin],
    );

    return (
      <div className="flex items-center">
        <p className="text-sm">Next update in:</p>
        <p className="text-sm">
          {/*<span>{minutes}</span>:*/}
          <span>{seconds} seconds</span>
        </p>
      </div>
    );
  },
);

export default Time;
