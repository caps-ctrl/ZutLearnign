import type { Metadata } from "next";
import AuthPage from "../auth/AuthPage";

export const metadata: Metadata = {
  title: "Logowanie | uniCheat",
  description: "Zaloguj się do swojego konta uniCheat.",
};

export default function LoginPage() {
  return <AuthPage mode="login" />;
}
