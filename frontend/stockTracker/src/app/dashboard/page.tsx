import { clearJWT } from "../jwtHandler";
import { Button } from "@heroui/button";

export default async function Dashboard() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      dashboard
      <Button type="submit" color="success" variant="ghost" onPress={clearJWT}>
        Log Out
      </Button>
      <Button>
        <a href="/dashboard/tracker">Tracker</a>
      </Button>
      <Button>
        <a href="/dashboard/bulletin">Bulletin</a>
      </Button>
    </div>
  );
}
