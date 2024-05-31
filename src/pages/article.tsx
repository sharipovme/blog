import { useNavigate, useParams } from "react-router-dom";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getPostQuery } from "@/queries";
import { BlogPostType } from "@/types";
import Can from "@/components/can";
import { Button } from "@/components/form/button";

export function Article() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const { data: post, isFetched }: UseQueryResult<BlogPostType> = useQuery({
    ...getPostQuery(postId || ""),
    enabled: !!postId,
  });

  return (
    <Can i="blog.read" redirect>
      <div className="container section">
        {post?.id && (
          <div className="article">
            <h2 className="article__title">{post.title}</h2>
            <p className="article__description">{post.body}</p>
            <Button onClick={() => navigate("/")}>Back</Button>
          </div>
        )}
        {!isFetched && postId && <div className="center-text">Loading...</div>}
      </div>
    </Can>
  );
}

export default Article;
