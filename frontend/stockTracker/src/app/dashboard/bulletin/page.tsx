// "use client";
import { Link } from "@heroui/link";
import { clearJWT } from "@/app/jwtHandler";
import { Button } from "@heroui/button";
import StockPost from "@/app/components/stockPost";
import CreatePostDrawer from "@/app/components/createPostDrawer";

export default async function Bulletin() {
  const response = await fetch("http://localhost:8080/api/post/retrieve", {
    method: "GET",
  });
  const posts = await response.json();
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <div className="absolute top-5 flex gap-5">
        <h1 className="text-3xl font-bold">tracker</h1>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          href="/dashboard"
          as={Link}
        >
          dashboard
        </Button>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          href="/dashboard/tracker"
          as={Link}
        >
          tracker
        </Button>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          onPress={clearJWT}
        >
          Log Out
        </Button>
      </div>
      <h1>Posts</h1>
      <div>
        {posts &&
          posts.map((post, i) => {
            return (
              <StockPost
                key={i}
                title={post.title}
                description={post.content}
              />
            );
          })}
      </div>
      <div className="absolute top-1/2 right-5 -translate-y-1/2">
        <CreatePostDrawer />
      </div>
    </div>
  );
}
