export async function signup(formData: FormData) {
  formData.forEach((data) => {
    if (!data) return;
  });
  const data: FormData = new FormData();
  data.append("name", formData.get("user") as string);
  data.append("password", formData.get("password") as string);
  const response: Response = await fetch("SIGNUP_API", {
    method: "POST",
    body: data,
  });
}
