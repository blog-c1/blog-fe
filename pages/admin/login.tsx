import LoginForm, { LoginFormData } from "components/login/LoginForm";
import { useAuth } from "hooks/use-auth";
import { useRouter } from "next/router";
import * as React from "react";
import styles from "styles/login.module.scss";

export default function LoginPage() {
  const { login, logout } = useAuth();
  const router = useRouter();

  const handleLogin = async (payload: LoginFormData) => {
    const { username, password } = payload;
    try {
      await login(username, password);
      router.push("/admin");
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
      <LoginForm onSubmit={(payload) => handleLogin(payload)} />
    </section>
  );
}
