import { redirect } from "next/navigation";
import { setJWT, setUsername } from "../cookieHandler";
import { authResponse } from "../dataInterfaces";
import { createToast } from "../components/createToast";

export async function signup(formData: FormData) {
  let success: boolean = false;

  const data: FormData = new FormData();
  data.append("username", formData.get("username") as string);
  data.append("password", formData.get("password") as string);

  try {
    const response: Response = await fetch(
      "http://localhost:8080/api/auth/signup",
      {
        method: "POST",
        body: data,
      },
    );

    if (response.status == 200) {
      const res: authResponse = await response.json();
      setJWT(res["token"]);
      setUsername(data.get("username") as string);

      success = true;
    } else {
      const res: string = await response.text();
      createToast(`${res}`, "danger");
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.name);
      createToast(`${e.message}`, "danger");
    }
  }

  if (success) redirect("/dashboard");
}
