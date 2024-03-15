interface TimerProps {
  minutes: number;
  seconds: number;
}

const Time = ({ minutes, seconds }: TimerProps) => {
  return (
    <div className="flex justify-center">
      <p>Time before the next update</p>
      <p>
        <span>{minutes}</span>:<span>{seconds}</span>
      </p>
    </div>
  );
};

export default Time;
