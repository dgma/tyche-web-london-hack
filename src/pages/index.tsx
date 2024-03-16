import { useEffect, useRef } from "react";
import { useReadContracts } from "wagmi";

import { baseSepolia } from "viem/chains";

import * as OracleContract from "../contracts/Oracle";

import Timer, { TimerHandle } from "../components/Timer";
import Price from "../components/Price";

const TIMER_VALUE_IN_MIN = 1;

const MainPage = () => {
  const prevIsFetchingRef = useRef(true);
  const timerRef = useRef<TimerHandle>(null);

  const { data, isPending, isFetching } = useReadContracts({
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
    query: { refetchInterval: TIMER_VALUE_IN_MIN * 60 * 1000 },
  });

  useEffect(() => {
    if (prevIsFetchingRef.current && !isFetching) {
      timerRef.current?.restartTimer();
    }
    prevIsFetchingRef.current = isFetching;
  }, [isFetching]);

  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Price
          price={data?.[0]?.result}
          decimals={data?.[1]?.result}
          isPending={isPending}
        />
        <Timer ref={timerRef} timerValueInMin={TIMER_VALUE_IN_MIN} />
      </div>
    </div>
  );
};

export default MainPage;