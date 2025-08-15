import { clearJWT } from "../jwtHandler";
import { Button } from "@heroui/button";

export default async function Dashboard() {
  return (
    <div className="mx-auto flex h-screen flex-col items-center justify-center">
      <div className="absolute top-5 flex gap-5">
        <h1 className="text-3xl font-bold">dashboard</h1>
        <Button
          type="submit"
          color="success"
          variant="ghost"
          onPress={clearJWT}
        >
          Log Out
        </Button>
      </div>

      <div className="flex w-full">
        <div className="flex w-1/2 justify-center">
          <Button>
            <a href="/dashboard/tracker">Tracker</a>
          </Button>
        </div>
        <div className="flex w-1/2 justify-center">
          <Button>
            <a href="/dashboard/bulletin">Bulletin</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
