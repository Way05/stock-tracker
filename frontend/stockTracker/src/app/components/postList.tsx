import { postObject } from "../dataInterfaces";
import StockPost from "./stockPost";

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
  return (
    <div>
      {props.list &&
        props.list.map((post: postObject, i: number) => {
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
