import { useEffect, useRef } from "react";
import { useReadContracts } from "wagmi";

import { baseSepolia } from "viem/chains";

import * as OracleContract from "../contracts/Oracle";

import Time, { TimerHandle } from "../components/Timer";
import Price from "../components/Price";

const MainPage = () => {
  const prevStatusRef = useRef<string | null>(null);
  const timerRef = useRef<TimerHandle>(null);

  const { data, isPending, status } = useReadContracts({
    contracts: [
      {
        ...OracleContract,
        functionName: "getPrice",
        chainId: baseSepolia.id,
      },
      {
        ...OracleContract,
        functionName: "decimals",
        chainId: baseSepolia.id,
      },
    ],
  });

  useEffect(() => {
    if (prevStatusRef.current !== "success" && status === "success") {
      timerRef.current?.restartTimer();
    }
    prevStatusRef.current = status;
  }, [status]);

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Price
          price={data?.[0]?.result}
          decimals={data?.[1]?.result}
          isPending={isPending}
        />
        <Time ref={timerRef} />
      </div>
    </div>
  );
};

export default MainPage;
