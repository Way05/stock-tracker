import { createToast } from "@/app/components/createToast";

export async function createPost(formData: FormData) {
  const data: FormData = new FormData();
  data.append("title", formData.get("title") as string);
  data.append("content", formData.get("content") as string);

  try {
    const response: Response = await fetch(
      "http://localhost:8080/api/post/create",
      {
        method: "POST",
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
      },
    );

    if (response.status == 200) {
      const data = await response.json();
      console.log(data);
    }
  } catch (e) {
    if (e instanceof Error) {
      console.error(e.name);
      createToast(`${e.message}`, "danger");
    }
  }
}
