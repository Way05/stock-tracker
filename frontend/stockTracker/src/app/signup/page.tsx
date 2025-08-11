"use client";
import { Card, CardBody } from "@heroui/card";
import { SignupForm } from "../components/signUp";

export default function SignUp() {
  return (
    <div className="mx-auto flex h-screen items-center justify-center">
      <div>
        <Card className="bg-stone-900">
          <CardBody>
            <h1 className="m-5 text-center">Sign Up</h1>
            <SignupForm />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
