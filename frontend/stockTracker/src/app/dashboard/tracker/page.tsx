import StockCard from "@/app/components/stockCard";
import { clearJWT } from "@/app/jwtHandler";
import { Button } from "@heroui/button";

export default function Tracker() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <div className="absolute top-5 flex gap-5">
        <h1 className="text-3xl font-bold">tracker</h1>
        <Button type="submit" color="success" variant="ghost">
          <a href="/dashboard">dashboard</a>
        </Button>
        <Button type="submit" color="success" variant="ghost">
          <a href="/dashboard/bulletin">bulletin</a>
        </Button>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          onPress={clearJWT}
        >
          Log Out
        </Button>
      </div>
      <div className="grid w-full grid-rows-3">
        <div className="row-start-2 mx-auto grid grid-cols-3">
          <div className="col-span-1">
            <h1>stats</h1>
            <p>text</p>
          </div>
          <div className="col-span-2 row-span-1 grid grid-cols-5 gap-1">
            <StockCard
              ticker="NVDA"
              name="Nvidia"
              price="$0.00 USD"
            ></StockCard>
            <StockCard
              ticker="NVDA"
              name="Nvidia"
              price="$0.00 USD"
            ></StockCard>
            <StockCard
              ticker="NVDA"
              name="Nvidia"
              price="$0.00 USD"
            ></StockCard>
            <StockCard
              ticker="NVDA"
              name="Nvidia"
              price="$0.00 USD"
            ></StockCard>
            <StockCard
              ticker="NVDA"
              name="Nvidia"
              price="$0.00 USD"
            ></StockCard>
            <StockCard
              ticker="NVDA"
              name="Nvidia"
              price="$0.00 USD"
            ></StockCard>
          </div>
        </div>
      </div>
    </div>
  );
}
