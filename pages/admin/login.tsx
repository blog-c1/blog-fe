import LoginForm from "components/login/LoginForm";
import { useAuth } from "hooks/use-auth";
import * as React from "react";
import styles from "styles/login.module.scss";

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
    <section className={`flex justify-center items-center ${styles.wrapper}`}>
      <LoginForm />
    </section>
  );
}
