import { Link } from "@heroui/link";
import { clearCookies } from "@/app/cookieHandler";
import { Button } from "@heroui/button";
import CreatePostDrawer from "@/app/components/createPostDrawer";
import { postObject } from "@/app/dataInterfaces";
import PostList from "@/app/components/postList";
import { getPosts } from "./actions";

export default async function Bulletin() {
  const posts: postObject[] = (await getPosts()) || [
    { title: "No posts yet", content: "...", date: new Date() },
  ];
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <div className="absolute top-5 flex gap-5">
        <h1 className="text-3xl font-bold">bulletin</h1>
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
          onPress={clearCookies}
        >
          Log Out
        </Button>
      </div>
      <h1>Posts</h1>
      <hr className="w-20 bg-white"></hr>
      <div>
        <PostList list={posts} />
      </div>
      <div className="absolute top-1/2 right-5 -translate-y-1/2">
        <CreatePostDrawer />
      </div>
    </div>
  );
}
