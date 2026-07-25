import type { Metadata } from "next";
import ProfileSettings from "./ProfileSettings";

export const metadata: Metadata = {
  title: "Profil użytkownika | uniCheat",
  description:
    "Zarządzaj profilem, bezpieczeństwem i preferencjami konta uniCheat.",
};

export default function ProfilePage() {
  return <ProfileSettings />;
}
