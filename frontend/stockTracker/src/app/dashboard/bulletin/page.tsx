import { Link } from "@heroui/link";
import { clearJWT } from "@/app/jwtHandler";
import { Button } from "@heroui/button";
import StockPost from "@/app/components/stockPost";

export default async function Bulletin() {
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
        <StockPost title="buy nvda" description="ai"></StockPost>
        <StockPost title="buy nvda" description="ai"></StockPost>
        <StockPost title="buy nvda" description="ai"></StockPost>
        <StockPost title="buy nvda" description="ai"></StockPost>
        <StockPost title="buy nvda" description="ai"></StockPost>
        <StockPost title="buy nvda" description="ai"></StockPost>
      </div>
      <div className="absolute top-1/2 right-5 -translate-y-1/2">
        <Button>Create Post</Button>
      </div>
    </div>
  );
}
