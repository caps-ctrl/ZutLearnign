import styles from "../../profile.module.css";

import { Settings2 } from "lucide-react";

export function SectionHeading({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Settings2;
  title: string;
  description: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <span>
        <Icon size={21} aria-hidden="true" />
      </span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
