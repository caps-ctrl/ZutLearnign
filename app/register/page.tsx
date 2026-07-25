import type { Metadata } from "next";
import AuthPage from "../auth/AuthPage";

export const metadata: Metadata = {
  title: "Rejestracja | uniCheat",
  description: "Załóż konto studenta w uniCheat.",
};

export default function RegisterPage() {
  return <AuthPage mode="register" />;
}
