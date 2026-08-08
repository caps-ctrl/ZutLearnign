import type { Metadata } from "next";

import { NavBar } from "@/components/layout/Navbar/NavBar";
import ProfileSettings from "./ProfileSettings";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Profil użytkownika | uniCheat",
  description:
    "Zarządzaj profilem, bezpieczeństwem i preferencjami konta uniCheat.",
};

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return <p>Uzytkownik nie jest zalogowany</p>;
  }

  const { data, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user?.id)
    .single();
  if (profileError) {
    console.error("Błąd pobierania profilu:", profileError);
    return <p>Wystąpił błąd podczas pobierania profilu.</p>;
  }

  return <ProfileSettings data={data} navigationBar={<NavBar />} />;
}
