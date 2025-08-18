"use client";
import { Card, CardBody } from "@heroui/card";
import { LoginForm } from "../components/login";

export default function Login() {
  return (
    <div className="mx-auto flex h-screen items-center justify-center">
      <div>
        <Card>
          <CardBody>
            <h1 className="m-5 text-center">Login</h1>
            <LoginForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
