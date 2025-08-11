import { Button } from "@heroui/button";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-x-16 p-10 font-sans">
      <main className="row-start-2 flex-wrap items-center justify-items-center gap-[32px] sm:items-start">
        <h1 className="m-5 text-3xl font-bold">Stock Tracker</h1>
        <div className="flex gap-5">
          <Button color="success" variant="ghost" radius="full" disableRipple>
            <a href="/signup">Sign Up</a>
          </Button>
          <Button color="success" variant="ghost" radius="full" disableRipple>
            <a href="/login">Login</a>
          </Button>
        </div>
      </main>
    </div>
  );
}
