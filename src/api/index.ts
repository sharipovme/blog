import request from "@/library/axios";

export const getPosts = () => {
  return request({ method: "GET", url: "/posts" });
};

export const getPost = (id: string) => {
  return request({ method: "GET", url: `/posts/${id}` });
};

export const createPost = (data: { title: string; body: string }) => {
  return request({ method: "POST", url: "/posts", data });
};

export const editPost = (data: { title: string; body: string }, id: string) => {
  return request({ method: "PUT", url: `/posts/${id}`, data });
};

export const deletePost = (id: number) => {
  return request({ method: "DELETE", url: `/posts/${id}` });
};
