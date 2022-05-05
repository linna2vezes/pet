import React from "react";
import { useAuth } from "../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { Button } from "./styled";

function Login() {
  const auth = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const data = {
      email,
      password,
    };
    auth.login(data, () => {
      navigate(from);
    });
    // console.log(data);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <label>
          email: <input type="email" name="email" />
        </label>
        <label>
          senha: <input type="password" name="password" />
        </label>
        <Button type="submit">Enviar</Button>
      </form>
    </div>
  );
}

export default Login;
