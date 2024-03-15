interface TimerProps {
  minutes: number;
  seconds: number;
}

const Time = ({ minutes, seconds }: TimerProps) => {
  return (
    <div className="flex justify-center gap-x-4">
      <p className="text-sm">Time before the next update</p>
      <p className="text-sm">
        <span>{minutes}</span>:<span>{seconds}</span>
      </p>
    </div>
  );
};

export default Time;
