import { postObject } from "../dataInterfaces";
import StockPost from "./stockPost";

type listProps = {
  list: postObject[];
};

export default function PostList(props: listProps) {
  return (
    <div>
      {props.list &&
        props.list.map((post: postObject, i: number) => {
          return (
            <StockPost key={i} title={post.title} description={post.content} />
          );
        })}
    </div>
  );
}
