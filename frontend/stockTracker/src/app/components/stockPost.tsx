import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";

type stockProps = {
  title: string;
  description: string;
  author: string;
  date: string;
  votes: number;
};

export default function StockPost(props: stockProps) {
  return (
    <div className="m-2 w-100">
      <Card className="border-1 border-white/50 p-2 text-center">
        <CardHeader className="p-1 text-lg">{props.title}</CardHeader>
        <CardBody className="p-1">{props.description}</CardBody>
        <CardFooter className="justify-between p-1">
          <div className="text-xs text-white/50">
            Posted by {props.author} on {props.date}
          </div>
          {/* <div>
            <Button isIconOnly>^</Button>
            {props.votes}
            <Button isIconOnly>v</Button>
          </div> */}
        </CardFooter>
      </Card>
    </div>
  );
}
