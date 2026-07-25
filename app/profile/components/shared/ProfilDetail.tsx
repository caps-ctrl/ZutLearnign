import styles from "../../profile.module.css";
import { Check } from "lucide-react";

export function ProfileDetail({
  label,
  value,
  verified = false,
  wide = false,
}: {
  label: string;
  value: string;
  verified?: boolean;
  wide?: boolean;
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
      </strong>
    </div>
  );
}
