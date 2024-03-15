import { http, createConfig } from "wagmi";
import { baseSepolia } from "wagmi/chains";

export const config = createConfig({
  chains: [baseSepolia],
  transports: {
    [baseSepolia.id]: http(
      "https://base-sepolia.g.alchemy.com/v2/4j3BdtzbDguFtThAoQSXHuqQYkWy6Fqp",
    ),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
