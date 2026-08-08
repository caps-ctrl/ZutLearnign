import { ReactNode } from "react";

export type Section = "profile" | "notifications" | "security";

export type ProfileData = {
  avatar_url: string;
  city?: string;
  university?: string;
  username: string;
  full_name: string;
  email: string;
  course?: string;
  semester?: string;
  faculty?: string;
  interests?: string[];
  githubUrl?: string;
  linkedinUrl?: string;
  bio?: string;
  isPrivate?: boolean;
};

export type ProfileSettingsProps = {
  navigationBar: ReactNode;
  data: ProfileData;
};
