import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { BlogPost } from "./blog-post";
import { getPostsQuery } from "@/queries";
import { BlogPostType } from "@/types";

export function BlogList() {
  const { data: posts = [], isFetched }: UseQueryResult<BlogPostType[]> =
    useQuery({
      ...getPostsQuery(),
    });

  return (
    <>
      {isFetched && posts.length > 0 && (
        <div className="blog-list">
          {posts.slice(0, 12).map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      )}

      {!isFetched && <div className="center-text">Loading...</div>}

      {isFetched && posts.length === 0 && (
        <div className="center-text">No Data</div>
      )}
    </>
  );
}
