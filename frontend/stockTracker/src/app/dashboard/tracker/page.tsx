import StockCard from "@/app/components/stockCard";
import { Button } from "@heroui/button";

export default function Tracker() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <header>
        <Button>
          <a href="../dashboard">Dashboard</a>
        </Button>
        <Button>
          <a href="../bulletin">Bulletin</a>
        </Button>
      </header>

      <div className="flex gap-2">
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
      </div>
    </div>
  );
}
