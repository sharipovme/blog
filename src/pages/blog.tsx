import { BlogList } from "@/components/blog-list";
import Can from "@/components/can";
import { Button } from "@/components/form/button";
import { useAuth } from "@/store/auth";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const { setAuth, setRole } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setAuth(false);
    setRole("");
  };

  return (
    <Can i="blog.read" redirect>
      <div className="container section">
        <div className="flex">
          <h2>Latest Posts</h2>
          <div className="right-buttons">
            <Can i="blog.create">
              <Button onClick={() => navigate("/blog/create")}>Create</Button>
            </Can>
            <Button onClick={logout}>Log out</Button>
          </div>
        </div>
        <BlogList />
      </div>
    </Can>
  );
};

export default Blog;
