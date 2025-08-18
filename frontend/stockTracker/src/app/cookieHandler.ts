"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function setJWT(jwt: string) {
  const cookieStore = await cookies();
  cookieStore.set("jwtToken", jwt, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
  });
}

export async function clearCookies() {
  const cookieStore = await cookies();
  cookieStore.delete("jwtToken");
  cookieStore.delete("user");
  redirect("/");
}

export async function setUsername(user: string) {
  const cookieStore = await cookies();
  cookieStore.set("user", user);
}
