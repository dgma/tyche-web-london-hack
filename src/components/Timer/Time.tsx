interface TimerProps {
  minutes: number;
  seconds: number;
}

const Time = ({ minutes, seconds }: TimerProps) => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <p className="text-2xl">Time before the next update</p>
      <p className="text-3xl">
        <span>{minutes}</span>:<span>{seconds}</span>
      </p>
    </div>
  );
};

export default Time;
