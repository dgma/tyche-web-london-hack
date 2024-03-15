// import { useEffect } from "react";
// import { useTimer } from "react-timer-hook";

import * as OracleContract from "../../contracts/Oracle";

// import Time from "../Timer";
import { useReadContract, useAccount } from "wagmi";

// const startTime = new Date();

const Price = () => {
  // const { seconds, minutes, restart } = useTimer({
  //   expiryTimestamp: startTime,
  //   onExpire: () => console.warn("onExpire called"),
  // });

  const { address } = useAccount();

  const { data: price, error } = useReadContract({
    ...OracleContract,
    functionName: "getPrice",
  });

  // useEffect(() => {
  //   // fetch current price

  //   const startTime = new Date();
  //   startTime.setMinutes(startTime.getMinutes() + 10);
  //   restart(startTime);
  // }, [restart]);

  console.log(address);
  console.log(price);
  console.log(error);

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-2xl">Current ETH/USD Price</p>
        <p className="text-3xl">4000</p>
      </div>

      {/* <Time minutes={minutes} seconds={seconds} /> */}
    </div>
  );
};

export default Price;
