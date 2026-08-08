import styles from "../../profile.module.css";
import { Check, Globe2, Lock } from "lucide-react";
import type { ReactNode } from "react";

export function ProfileDetail({
  label,
  value,
  verified = false,
  wide = false,
  status,
}: {
  label: string;
  value: ReactNode;
  verified?: boolean;
  wide?: boolean;
  status?: "public" | "private";
}) {
  return (
    <div
      className={`${styles.profileDetail} ${wide ? styles.profileDetailWide : ""}`}
    >
      <span>{label}</span>
      <strong>
        {value}
        {verified && (
          <small className={styles.verifiedBadge}>
            <Check size={12} aria-hidden="true" />
            Zweryfikowany
          </small>
        )}
        {status && (
          <small className={styles.visibilityBadge}>
            {status === "private" ? (
              <Lock size={12} aria-hidden="true" />
            ) : (
              <Globe2 size={12} aria-hidden="true" />
            )}
            {status === "private" ? "Prywatny" : "Publiczny"}
          </small>
        )}
      </strong>
    </div>
  );
}
