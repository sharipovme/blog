import { useNavigate } from "react-router-dom";
import { Button } from "@/components/form/button";
import { useAuth } from "@/store/auth";

const Login = () => {
  const { setAuth, setRole } = useAuth();
  const navigate = useNavigate();

  const login = (role: string) => {
    localStorage.setItem("role", role);
    setAuth(true);
    setRole(role);
    navigate("/");
  };

  return (
    <div className="container section">
      <h2 className="title">Login</h2>
      <div className="flex login ">
        <Button onClick={() => login("admin")}>Login as admin</Button>
        <Button onClick={() => login("editor")}>Login as editor</Button>
      </div>
    </div>
  );
};

export default Login;
