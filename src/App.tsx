import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";

import { useTimer } from "react-timer-hook";

import { config, projectId } from "./config";

import { Time } from "./components/Timer";

const queryClient = new QueryClient();

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: false,
});

const startTime = new Date();

function App() {
  const { seconds, minutes, restart } = useTimer({
    expiryTimestamp: startTime,
    onExpire: () => console.warn("onExpire called"),
  });

  useEffect(() => {
    // fetch current price

    const startTime = new Date();
    startTime.setMinutes(startTime.getMinutes() + 10);
    restart(startTime);
  }, [restart]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div className="dark:text-white text-black">
          <Time minutes={minutes} seconds={seconds} />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
