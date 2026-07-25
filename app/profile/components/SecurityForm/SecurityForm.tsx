import { SectionHeading } from "../shared/SectionHeading";
import { LockKeyhole, KeyRound, Trash2 } from "lucide-react";
import { FormActions } from "../shared/FormActions";
import styles from "../../profile.module.css";
import { FormEvent } from "react";
export function SecurityForm({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <SectionHeading
        icon={LockKeyhole}
        title="Bezpieczeństwo"
        description="Zadbaj o silne hasło i kontroluj aktywne sesje."
      />

      <div className={styles.securityCard}>
        <div className={styles.securityTitle}>
          <span>
            <KeyRound size={19} aria-hidden="true" />
          </span>
          <div>
            <strong>Zmień hasło</strong>
            <p>Nowe hasło powinno mieć minimum 8 znaków.</p>
          </div>
        </div>
        <div className={styles.formGrid}>
          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>Aktualne hasło</span>
            <input
              name="currentPassword"
              type="password"
              autoComplete="current-password"
            />
          </label>
          <label className={styles.field}>
            <span>Nowe hasło</span>
            <input
              name="newPassword"
              type="password"
              minLength={8}
              autoComplete="new-password"
            />
          </label>
          <label className={styles.field}>
            <span>Powtórz nowe hasło</span>
            <input
              name="confirmPassword"
              type="password"
              minLength={8}
              autoComplete="new-password"
            />
          </label>
        </div>
      </div>

      <div className={styles.dangerZone}>
        <div>
          <strong>Usuń konto</strong>
          <p>Ta operacja trwale usunie profil i wszystkie zapisane dane.</p>
        </div>
        <button type="button" className={styles.dangerButton}>
          <Trash2 size={16} aria-hidden="true" />
          Usuń konto
        </button>
      </div>
      <FormActions />
    </form>
  );
}
