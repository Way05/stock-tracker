import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { login } from "../login/actions";
import { Link } from "@heroui/link";

export function LoginForm() {
  return (
    <form action={login}>
      <div className="mb-5 w-80">
        <Input
          id="name"
          name="username"
          label="username"
          placeholder="name"
          variant="bordered"
        />
      </div>
      <div className="mb-5">
        <Input
          id="password"
          name="password"
          label="password"
          type="password"
          placeholder="password"
          color="default"
          variant="bordered"
        />
      </div>
      <div className="flex justify-between">
        <Link href="/signup" underline="hover">
          New user?
        </Link>
        <Button type="submit" color="primary" variant="ghost">
          Login
        </Button>
      </div>
    </form>
  );
}
