import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

type stockProps = {
  title: string;
  description: string;
};

export default function StockPost(props: stockProps) {
  return (
    <div className="m-2 w-100">
      <Card className="border-1 border-white/50 p-2 text-center">
        <CardHeader className="p-1">{props.title}</CardHeader>
        <CardBody className="p-1">{props.description}</CardBody>
      </Card>
    </div>
  );
}
