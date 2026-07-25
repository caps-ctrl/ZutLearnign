import styles from "../../profile.module.css";

export function FormActions({ onCancel }: { onCancel?: () => void }) {
  return (
    <div className={styles.formActions}>
      <button
        type="reset"
        className={styles.secondaryButton}
        onClick={onCancel}
      >
        Anuluj zmiany
      </button>
      <button type="submit" className={styles.primaryButton}>
        Zapisz zmiany
      </button>
    </div>
  );
}
