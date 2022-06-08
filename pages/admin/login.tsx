import { useAuth } from "hooks/use-auth";
import * as React from "react";

export default function LoginPage() {
  const { login, logout } = useAuth();

  const handleLogin = async () => {
    try {
      await login();
      // todo: redirect to dashboard
    } catch (error) {
      // todo: handle error
      console.log("error", error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      // todo: redirect to login
    } catch (error) {
      // todo: handle error
      console.log("error", error);
    }
  };

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
