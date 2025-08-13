"use server";
import { cookies } from "next/headers";

export async function setJWT(jwt: string) {
  const cookieStore = await cookies();
  cookieStore.set("jwtToken", jwt, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    path: "/",
  });
}
