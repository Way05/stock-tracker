import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { signup } from "../actions/auth";

export function SignupForm() {
  return (
    <form action={signup}>
      <div className="mb-5 w-100">
        <Input id="name" name="name" placeholder="name" variant="bordered" />
      </div>
      <div className="mb-5">
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          variant="bordered"
        />
      </div>
      <div className="flex justify-end">
        <Button type="submit" variant="light" className="text-white">
          Sign Up
        </Button>
      </div>
    </form>
  );
}
