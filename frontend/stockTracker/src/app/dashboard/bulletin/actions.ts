const placeholder = [
  { title: "nvda", content: "buy" },
  { title: "nvda", content: "buy" },
];

export async function createPost(formData: FormData) {
  const data: FormData = new FormData();
  data.append("title", formData.get("title") as string);
  data.append("content", formData.get("content") as string);

  //api call here
  //when call returns success create post

  placeholder.push({
    title: formData.get("title") as string,
    content: formData.get("content") as string,
  });
}

export async function getPosts() {
  //api call to get posts
  return placeholder;
}
