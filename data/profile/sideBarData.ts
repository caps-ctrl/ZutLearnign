import { UserRound } from "lucide-react";
import { Bell } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export const navigation = [
  { id: "profile" as const, label: "Dane profilu", icon: UserRound },
  { id: "notifications" as const, label: "Powiadomienia", icon: Bell },
  { id: "security" as const, label: "Bezpieczeństwo", icon: ShieldCheck },
];
