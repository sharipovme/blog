import React, { useMemo, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { BlogPostType } from "@/types";
import { Button } from "./form/button";
import editIcon from "@/assets/images/edit.svg";
import deleteIcon from "@/assets/images/delete.svg";
import { deletePost } from "@/api";
import Can from "./can";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // random image
  const imageUrl = useMemo(() => {
    return `https://picsum.photos/960/840?random=${post.id}`;
  }, [post.id]);

  const onDelete = () => {
    setDeleteLoading(true);
    deletePost(post.id)
      .then(() => {
        queryClient.invalidateQueries({ queryKey: ["posts"] });
        setIsDeleted(true);
      })
      .catch(() => alert("something went wrong"))
      .finally(() => setDeleteLoading(false));
  };

  return (
    !isDeleted && (
      <div
        className="blog-card"
        onClick={() => navigate(`/article/${post.id}`)}
      >
        <img
          className="blog-card__image"
          src={imageUrl}
          alt={post.title}
          draggable={false}
        />
        <div className="blog-card__category">Technology</div>
        <h3 className="blog-card__heading">{post.title}</h3>
        <div className="blog-card__actions">
          <Can i="blog.write">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/blog/${post.id}`);
              }}
              colorScheme="grey"
            >
              <img src={editIcon} alt="edit" width="12px" />
            </Button>
          </Can>
          <Can i="blog.delete">
            <Button
              colorScheme="grey"
              isDisabled={deleteLoading}
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
            >
              <img src={deleteIcon} alt="delete" width="12px" />
            </Button>
          </Can>
        </div>
        <p className="blog-card__date">May 29, 2024</p>
      </div>
    )
  );
}
