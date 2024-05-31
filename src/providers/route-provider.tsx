import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "@/store/auth";
import routes from "@/routes";

export default function RouteProvider() {
  const router = createBrowserRouter(routes);
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth && window.location.pathname !== "/login") {
      localStorage.clear();
      window.location.href = "/login";
    }
  }, [isAuth]);

  return (
    <Suspense fallback={null}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
