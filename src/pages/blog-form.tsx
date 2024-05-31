import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  UseQueryResult,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { Input } from "@/components/form/input";
import { Button } from "@/components/form/button";
import { Textarea } from "@/components/form/textarea";
import { getPostQuery } from "@/queries";
import { createPost, editPost } from "@/api";
import Can from "@/components/can";
import createSchema from "@/helpers/createSchema";
import useHookForm from "@/hooks/useHookForm";
import { BlogPostType } from "@/types";

const values: {
  title: string;
  body: string;
} = {
  title: "",
  body: "",
};

const schema = createSchema({
  title: "required",
  body: "required",
});

export function BlogForm() {
  const [loading, setLoading] = useState(false);
  const { postId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: post, isFetched }: UseQueryResult<BlogPostType> = useQuery({
    ...getPostQuery(postId || ""),
    enabled: !!postId,
  });

  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useHookForm(values, schema);

  const onSubmit = handleSubmit((data: { title: string; body: string }) => {
    setLoading(true);
    console.log(data);
    (postId ? editPost : createPost)(data, postId || "")
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        queryClient.invalidateQueries({ queryKey: ["post", postId] });
        alert("Successfull");
        navigate("/");
      })
      .catch(() => alert("something went wrong"))
      .finally(() => setLoading(false));
  });

  useEffect(() => {
    if (post?.id) {
      reset(post);
    }
  }, [post, reset]);

  return (
    <Can i="blog.create" redirect>
      <div className="container section">
        <h2 className="title">{postId ? "Edit Post" : "Create Post"}</h2>
        {(isFetched || !postId) && (
          <div className="blog-form">
            <Input
              name="title"
              control={control}
              errors={errors}
              inputProps={{
                placeholder: "Blog post title",
              }}
            />
            <Textarea
              name="body"
              control={control}
              errors={errors}
              textaraProps={{
                placeholder: "Blog post description",
              }}
            />
            <Button isDisabled={loading} onClick={onSubmit}>
              {postId ? "Save" : "Create"}
            </Button>
          </div>
        )}
        {!isFetched && postId && <div className="center-text">Loading...</div>}
      </div>
    </Can>
  );
}

export default BlogForm;
