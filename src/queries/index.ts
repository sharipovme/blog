import { getPost, getPosts } from "@/api";

export function getPostsQuery() {
  return {
    queryKey: ["posts"],
    queryFn: async () => getPosts(),
  };
}

export function getPostQuery(id: string) {
  return {
    queryKey: ["post", id],
    queryFn: async () => getPost(id),
  };
}
