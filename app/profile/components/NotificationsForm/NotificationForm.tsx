import { FormEvent } from "react";
import { SectionHeading } from "../shared/SectionHeading";
import styles from "../../profile.module.css";
import { notificationOptions } from "@/data/profile/profileData";
import { Bell } from "lucide-react";
import { FormActions } from "../shared/FormActions";
export function NotificationsForm({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <SectionHeading
        icon={Bell}
        title="Powiadomienia"
        description="Wybierz, o czym chcesz otrzymywać informacje."
      />
      <div className={styles.optionList}>
        {notificationOptions.map((option) => (
          <label className={styles.optionRow} key={option.id}>
            <span>
              <strong>{option.title}</strong>
              <small>{option.description}</small>
            </span>
            <input
              className={styles.switch}
              type="checkbox"
              name={option.id}
              defaultChecked={option.defaultChecked}
              aria-label={option.title}
            />
          </label>
        ))}
      </div>
      <FormActions />
    </form>
  );
}
