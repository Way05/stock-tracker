import { Card, CardBody } from "@heroui/card";
import StockCard from "./stockCard";

export default function StockList() {
  return (
    <Card>
      <CardBody className="grid grid-cols-5 gap-1">
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
        <StockCard ticker="NVDA" name="Nvidia" price="$0.00 USD"></StockCard>
      </CardBody>
    </Card>
  );
}
