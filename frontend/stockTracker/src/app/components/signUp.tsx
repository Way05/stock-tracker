import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { signup } from "../signup/actions";

export function SignupForm() {
  return (
    <form action={signup}>
      <div className="mb-5 w-100">
        <Input
          id="name"
          name="name"
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
      <div className="flex justify-end">
        <Button type="submit" color="primary" variant="ghost">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
