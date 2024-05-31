import { BlogList } from "@/components/blog-list";
import Can from "@/components/can";
import { Button } from "@/components/form/button";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <Can i="blog.read" redirect>
      <div className="container section">
        <div className="flex">
          <h2>Latest Posts</h2>
          <Can i="blog.create">
            <Button onClick={() => navigate("/blog/create")}>Create</Button>
          </Can>
        </div>
        <BlogList />
      </div>
    </Can>
  );
};

export default Blog;
