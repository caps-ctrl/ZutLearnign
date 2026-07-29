"use client";
import type { ReactNode } from "react";
import { ProfileForm } from "./components/ProfileForm/ProfileForn";
import { NotificationsForm } from "./components/NotificationsForm/NotificationForm";
import { SecurityForm } from "./components/SecurityForm/SecurityForm";
import { BookOpen, Check, ChevronRight } from "lucide-react";
import { FormEvent, useState } from "react";
import styles from "./profile.module.css";
import { navigation } from "@/data/profile/sideBarData";

type Section = "profile" | "notifications" | "security";

type ProfileSettingsProps = {
  navigationBar: ReactNode;
};

export default function ProfileSettings({
  navigationBar,
}: ProfileSettingsProps) {
  const [section, setSection] = useState<Section>("profile");
  const [saved, setSaved] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2400);
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        {navigationBar}

        <section className={styles.hero} aria-labelledby="profile-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Twoje konto</p>
            <h1 id="profile-title">Ustawienia profilu</h1>
            <p>
              Zarządzaj swoimi danymi, preferencjami i bezpieczeństwem konta.
            </p>
          </div>
          <div className={styles.profileSummary}>
            <div className={styles.avatar} aria-hidden="true">
              JK
            </div>
            <div>
              <strong>Jan Kowalski</strong>
              <span>Informatyka · 3 semestr</span>
            </div>
          </div>
        </section>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <nav className={styles.sectionNav} aria-label="Sekcje ustawień">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = section === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={isActive ? styles.navItemActive : styles.navItem}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setSection(item.id)}
                  >
                    <Icon size={19} aria-hidden="true" />
                    <span>{item.label}</span>
                    <ChevronRight
                      className={styles.chevron}
                      size={17}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </nav>

            <div className={styles.completionCard}>
              <div className={styles.completionIcon}>
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <div>
                <strong>Profil uzupełniony w 80%</strong>
                <p>Dodaj rok studiów, aby inni łatwiej mogli Ci pomóc.</p>
              </div>
              <div
                className={styles.progress}
                aria-label="Profil uzupełniony w 80 procentach"
              >
                <span />
              </div>
            </div>
          </aside>

          <section className={styles.content} aria-live="polite">
            {section === "profile" && (
              <ProfileForm
                isEditing={isEditingProfile}
                onEdit={() => setIsEditingProfile(true)}
                onCancel={() => setIsEditingProfile(false)}
                onSubmit={(event) => {
                  handleSubmit(event);
                  setIsEditingProfile(false);
                }}
              />
            )}
            {section === "notifications" && (
              <NotificationsForm onSubmit={handleSubmit} />
            )}
            {section === "security" && <SecurityForm onSubmit={handleSubmit} />}
          </section>
        </div>
      </div>

      <div
        className={`${styles.toast} ${saved ? styles.toastVisible : ""}`}
        role="status"
      >
        <Check size={18} aria-hidden="true" />
        Zmiany zostały zapisane
      </div>
    </main>
  );
}
