interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <p className="text-2xl">Current ETH/USD Price</p>
      <p className="text-3xl">{price}</p>
    </div>
  );
};

export default Price;
