"use client";
import { Select, SelectItem } from "@heroui/select";
import { postObject } from "../dataInterfaces";
import StockPost from "./stockPost";
import { ChangeEventHandler, useState } from "react";

type listProps = {
  list: postObject[];
};

export default function PostList(props: listProps) {
  function formatDate(milliseconds: number) {
    const date: Date = new Date(milliseconds);
    const options: any = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    const formatter = new Intl.DateTimeFormat("en-US", options);
    const formattedDate = formatter.format(date);
    return formattedDate;
  }

  const [sort, setSort] = useState<string | undefined>(undefined);
  const handleSortChange = (e: any) => {
    setSort(e.target.value);
  };

  function createSorter(property: "date" | "votes", ascending: boolean) {
    if (!property) return;
    return function (a: postObject, b: postObject) {
      if (ascending) {
        return a[property] - b[property];
      } else {
        return b[property] - a[property];
      }
    };
  }
  return (
    <div>
      <Select
        className="mx-auto my-2 w-50"
        placeholder="Sort"
        aria-label="Sort"
        onChange={handleSortChange}
      >
        <SelectItem key="date false">Most Recent</SelectItem>
        <SelectItem key="date true">Least Recent</SelectItem>
        <SelectItem key="votes false">Most Votes</SelectItem>
        <SelectItem key="votes true">Least Votes</SelectItem>
      </Select>
      {props.list &&
        props.list
          .sort(
            createSorter(
              sort?.split(" ")[0] as "date" | "votes",
              sort?.split(" ")[1] == "true",
            ),
          )
          .map((post: postObject, i: number) => {
            return (
              <StockPost
                key={i}
                title={post.title}
                description={post.content}
                author={post.author}
                date={formatDate(post.date)}
                votes={post.votes}
              />
            );
          })}
    </div>
  );
}
