"use client";
import { ProfileForm } from "./components/ProfileForm/ProfileForn";
import { NotificationsForm } from "./components/NotificationsForm/NotificationForm";
import { SecurityForm } from "./components/SecurityForm/SecurityForm";
import {
  Bell,
  BookOpen,
  Check,
  ChevronRight,
  LogOut,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import styles from "./profile.module.css";

type Section = "profile" | "notifications" | "security";

const navigation = [
  { id: "profile" as const, label: "Dane profilu", icon: UserRound },
  { id: "notifications" as const, label: "Powiadomienia", icon: Bell },
  { id: "security" as const, label: "Bezpieczeństwo", icon: ShieldCheck },
];

export default function ProfileSettings() {
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
        <header className={styles.header}>
          <Link
            href="/"
            className={styles.brand}
            aria-label="uniCheat — strona główna"
          >
            <span className={styles.brandMark}>uC</span>
            <strong>uniCheat</strong>
          </Link>
          <nav className={styles.headerNav} aria-label="Nawigacja profilu">
            <Link href="/">Strona główna</Link>
            <Link href="/faq">FAQ</Link>
            <button type="button" className={styles.logoutButton}>
              <LogOut size={16} aria-hidden="true" />
              Wyloguj
            </button>
          </nav>
        </header>

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

{
  /*
//Done
function SectionHeading({
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

//Done
function ProfileForm({
  isEditing,
  onEdit,
  onCancel,
  onSubmit,
}: {
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.headingWithAction}>
        <SectionHeading
          icon={Settings2}
          title="Dane profilu"
          description="Te informacje pomagają dopasować treści do Twoich studiów."
        />
        {!isEditing && (
          <button type="button" className={styles.editButton} onClick={onEdit}>
            <Settings2 size={16} aria-hidden="true" />
            Edytuj profil
          </button>
        )}
      </div>

      <div className={styles.avatarEditor}>
        <div className={styles.largeAvatar} aria-hidden="true">
          JK
        </div>
        <div>
          <strong>Zdjęcie profilowe</strong>
          <p>
            {isEditing
              ? "PNG lub JPG, maksymalnie 5 MB."
              : "Widoczne przy Twoich materiałach i komentarzach."}
          </p>
          {isEditing && (
            <label className={styles.uploadButton}>
              <Camera size={16} aria-hidden="true" />
              Zmień zdjęcie
              <input
                type="file"
                accept="image/png,image/jpeg"
                className={styles.visuallyHidden}
              />
            </label>
          )}
        </div>
      </div>

      {isEditing ? (
        <div className={styles.formGrid}>
          <label className={styles.field}>
            <span>Imię</span>
            <input
              name="firstName"
              defaultValue="Jan"
              autoComplete="given-name"
            />
          </label>
          <label className={styles.field}>
            <span>Nazwisko</span>
            <input
              name="lastName"
              defaultValue="Kowalski"
              autoComplete="family-name"
            />
          </label>
          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>Adres e-mail</span>
            <div className={styles.inputWithIcon}>
              <Mail size={17} aria-hidden="true" />
              <input
                name="email"
                type="email"
                defaultValue="jan.kowalski@zut.edu.pl"
                autoComplete="email"
              />
            </div>
            <small>Adres został zweryfikowany.</small>
          </label>
          <label className={styles.field}>
            <span>Kierunek</span>
            <select name="course" defaultValue="informatyka">
              <option value="informatyka">Informatyka</option>
              <option value="automatyka">Automatyka i robotyka</option>
              <option value="budownictwo">Budownictwo</option>
              <option value="zarzadzanie">Zarządzanie</option>
            </select>
          </label>
          <label className={styles.field}>
            <span>Semestr</span>
            <select name="semester" defaultValue="3">
              {Array.from({ length: 7 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} semestr
                </option>
              ))}
            </select>
          </label>
          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>O mnie</span>
            <textarea
              name="bio"
              rows={4}
              maxLength={240}
              defaultValue="Student informatyki, fan front-endu i dobrej kawy. Chętnie wymieniam się notatkami z algorytmów."
            />
            <small>Maksymalnie 240 znaków.</small>
          </label>
        </div>
      ) : (
        <div className={styles.profileDetails}>
          <ProfileDetail label="Imię i nazwisko" value="Jan Kowalski" />
          <ProfileDetail
            label="Adres e-mail"
            value="jan.kowalski@zut.edu.pl"
            verified
          />
          <ProfileDetail label="Kierunek" value="Informatyka" />
          <ProfileDetail label="Semestr" value="3 semestr" />
          <ProfileDetail
            label="O mnie"
            value="Student informatyki, fan front-endu i dobrej kawy. Chętnie wymieniam się notatkami z algorytmów."
            wide
          />
        </div>
      )}

      {isEditing && <FormActions onCancel={onCancel} />}
    </form>
  );
}
//Done
function ProfileDetail({
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
//Done
function NotificationsForm({
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
//Done
function SecurityForm({
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
//Done
function FormActions({ onCancel }: { onCancel?: () => void }) {
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
*/
}
