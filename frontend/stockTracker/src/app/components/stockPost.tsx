"use client";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { useState } from "react";

type stockProps = {
  title: string;
  description: string;
  author: string;
  date: string;
  votes: number;
};

export default function StockPost(props: stockProps) {
  const [voted, setVoted] = useState<boolean>(false);
  const [votes, setVotes] = useState<number>(props.votes);
  const [isUpVoted, setIsUpVoted] = useState<boolean | null>(null);

  return (
    <div className="m-2 w-100">
      <Card className="border-1 border-white/50 p-2 text-center">
        <CardHeader className="p-1 text-lg">{props.title}</CardHeader>
        <CardBody className="p-1">{props.description}</CardBody>
        <CardFooter className="justify-between p-1">
          <div className="text-xs text-white/50">
            Posted by {props.author} on {props.date}
          </div>
          <div className="flex gap-2 align-middle">
            <Button
              size="sm"
              className="p-0"
              isIconOnly
              onPress={() => {
                if (voted && isUpVoted) {
                  setVotes(votes - 1);
                  setVoted(false);
                  setIsUpVoted(null);
                } else if (voted && !isUpVoted) {
                  setVotes(votes + 2);
                  setIsUpVoted(true);
                } else {
                  setVotes(votes + 1);
                  setVoted(true);
                  setIsUpVoted(true);
                }
              }}
              variant={
                isUpVoted == null ? "ghost" : isUpVoted ? "solid" : "ghost"
              }
            >
              +
            </Button>
            {votes ? votes : null}
            <Button
              size="sm"
              isIconOnly
              onPress={() => {
                if (voted && isUpVoted) {
                  setVotes(votes - 2);
                  setIsUpVoted(false);
                } else if (voted && !isUpVoted) {
                  setVotes(votes + 1);
                  setVoted(false);
                  setIsUpVoted(null);
                } else {
                  setVotes(votes - 1);
                  setVoted(true);
                  setIsUpVoted(false);
                }
              }}
              variant={
                isUpVoted == null ? "ghost" : isUpVoted ? "ghost" : "solid"
              }
            >
              -
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
