import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

type stockProps = {
  ticker: string;
  name: string;
  price: string;
};

export default function StockCard(props: stockProps) {
  return (
    <div>
      <Card className="aspect-square w-35 border-1 border-white/50 p-2 text-center">
        <CardHeader className="p-1">{props.ticker}</CardHeader>
        <CardBody className="p-1">{props.price}</CardBody>
        <CardFooter className="p-1">{props.name}</CardFooter>
      </Card>
    </div>
  );
}
