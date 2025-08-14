import { redirect } from "next/navigation";
import { setJWT } from "../jwtHandler";
import { authResponse } from "../dataInterfaces";
import { createToast } from "../components/createToast";

export async function login(formData: FormData) {
  let success: boolean = false;

  const data: FormData = new FormData();
  data.append("username", formData.get("username") as string);
  data.append("password", formData.get("password") as string);

  try {
    const response: Response = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",
        body: data,
      },
    );

    if (response.status == 200) {
      const data: authResponse = await response.json();
      setJWT(data["token"]);
      success = true;
    } else {
      const data: string = await response.text();
      createToast(`${data}`, "danger");
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.name);
      createToast(`${e.message}`, "danger");
    }
  }

  if (success) redirect("/dashboard");
}
