export async function signup(formData: FormData) {
  formData.forEach((data) => {
    if (!data) return;
  });

  const data: FormData = new FormData();
  data.append("name", formData.get("user") as string);
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
      const data = await response.text();
      console.log(data);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function login(formData: FormData) {
  formData.forEach((data) => {
    if (!data) return;
  });

  const data: FormData = new FormData();
  data.append("name", formData.get("user") as string);
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
      const data = await response.text();
      console.log(data);
    }
  } catch (e) {
    console.error(e);
  }
}
