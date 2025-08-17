"use server";
import { createToast } from "@/app/components/createToast";
import { cookies } from "next/headers";

export async function createPost(formData: FormData) {
  const data: FormData = new FormData();
  data.append("title", formData.get("title") as string);
  data.append("content", formData.get("content") as string);

  const cookieStore = await cookies();
  const jwtToken: string | undefined = cookieStore.get("jwtToken")?.value;

  try {
    const response: Response = await fetch(
      "http://localhost:8080/api/post/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        body: data,
      },
    );

    if (response.status == 200) {
      createToast("Post created", "success");
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.name);
      createToast(`${e.message}`, "danger");
    }
  }
}

export async function getPosts() {
  try {
    const response: Response = await fetch(
      "http://localhost:8080/api/post/retrieve",
      {
        method: "GET",
        headers: {
          "Cache-Control": "max-age-3600",
        },
      },
    );

    const data = await response.json();
    return data;
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.message);
    }
  }
}
