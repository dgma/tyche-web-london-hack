import { ReactNode } from "react";
import { formatUnits } from "viem";

interface PriceProps {
  price?: bigint;
  decimals?: number;
  isPending?: boolean;
}

const Price = ({ price, decimals, isPending = true }: PriceProps) => {
  let children: ReactNode = <span>N/A</span>;

  if (isPending) {
    children = <span>Loading...</span>;
  }

  if (price && decimals) {
    children = <span>{formatUnits(price, decimals)}</span>;
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl">ETH/USD Price</p>
      <p className="text-3xl">{children}</p>
    </div>
  );
};

export default Price;
