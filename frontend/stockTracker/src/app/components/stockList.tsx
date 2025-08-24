import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import StockCard from "./stockCard";
import { Button } from "@heroui/button";

export default function StockList() {
  return (
    <Card>
      <CardBody className="grid grid-cols-5 gap-1">
        <div className="aspect-square w-30">
          <Card className="aspect-square border-1 border-white/50 p-2 text-center">
            <Button className="aspect-square h-full w-full text-3xl">+</Button>
          </Card>
        </div>
      </CardBody>
    </Card>
  );
}
