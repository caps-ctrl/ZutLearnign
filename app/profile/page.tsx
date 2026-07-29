import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { NavBar } from "@/components/layout/Navbar/NavBar";
import ProfileSettings from "./ProfileSettings";

export const metadata: Metadata = {
  title: "Profil użytkownika | uniCheat",
  description:
    "Zarządzaj profilem, bezpieczeństwem i preferencjami konta uniCheat.",
};

export default async function ProfilePage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();

  if (!data?.claims?.sub) {
    redirect("/login");
  }

  return <ProfileSettings navigationBar={<NavBar />} />;
}
