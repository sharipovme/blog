import Article from "@/pages/article";
import Blog from "@/pages/blog";
import BlogForm from "@/pages/blog-form";
import Login from "@/pages/login";

const routes = [
  {
    id: "blog",
    title: "Blog",
    path: "/",
    element: <Blog />,
  },
  {
    id: "create-post",
    title: "Create Post",
    path: "/blog/create",
    element: <BlogForm />,
  },
  {
    id: "edit-post",
    title: "Edit Post",
    path: "/blog/:postId",
    element: <BlogForm />,
  },
  {
    id: "view-post",
    title: "View Post",
    path: "/article/:postId",
    element: <Article />,
  },
  {
    id: "login",
    title: "Login",
    path: "/login",
    element: <Login />,
  },
];

export default routes;
