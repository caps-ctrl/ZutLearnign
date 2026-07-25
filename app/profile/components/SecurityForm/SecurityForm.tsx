"use client";

import { SectionHeading } from "../shared/SectionHeading";
import {
  Check,
  KeyRound,
  Laptop,
  LockKeyhole,
  LogOut,
  ShieldCheck,
  Smartphone,
  Trash2,
} from "lucide-react";
import { FormActions } from "../shared/FormActions";
import styles from "../../profile.module.css";
import type { FormEvent } from "react";
import { useState } from "react";

const initialSessions = [
  {
    id: "current",
    device: "MacBook Pro · Chrome",
    location: "Szczecin, Polska",
    activity: "Aktywna teraz",
    current: true,
    icon: Laptop,
  },
  {
    id: "mobile",
    device: "iPhone 15 · Safari",
    location: "Szczecin, Polska",
    activity: "Ostatnia aktywność: 2 godz. temu",
    current: false,
    icon: Smartphone,
  },
];

export function SecurityForm({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [sessions, setSessions] = useState(initialSessions);

  function handlePasswordSubmit(event: FormEvent<HTMLFormElement>) {
    onSubmit(event);
    setIsChangingPassword(false);
  }

  return (
    <div>
      <SectionHeading
        icon={LockKeyhole}
        title="Bezpieczeństwo"
        description="Zadbaj o silne hasło i kontroluj aktywne sesje."
      />

      <div className={styles.securityCard}>
        <div className={styles.securityCardHeader}>
          <div className={styles.securityTitle}>
            <span>
              <KeyRound size={19} aria-hidden="true" />
            </span>
            <div>
              <strong>Hasło</strong>
              <p>Ostatnia zmiana hasła: 14 maja 2026.</p>
            </div>
          </div>
          {!isChangingPassword && (
            <button
              type="button"
              className={styles.securityActionButton}
              onClick={() => setIsChangingPassword(true)}
            >
              Zmień hasło
            </button>
          )}
        </div>

        {isChangingPassword && (
          <form
            className={styles.revealPanel}
            onSubmit={handlePasswordSubmit}
          >
            <div className={styles.formGrid}>
              <label className={`${styles.field} ${styles.fullWidth}`}>
                <span>Aktualne hasło</span>
                <input
                  name="currentPassword"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </label>
              <label className={styles.field}>
                <span>Nowe hasło</span>
                <input
                  name="newPassword"
                  type="password"
                  minLength={8}
                  autoComplete="new-password"
                  required
                />
              </label>
              <label className={styles.field}>
                <span>Powtórz nowe hasło</span>
                <input
                  name="confirmPassword"
                  type="password"
                  minLength={8}
                  autoComplete="new-password"
                  required
                />
              </label>
            </div>
            <FormActions onCancel={() => setIsChangingPassword(false)} />
          </form>
        )}
      </div>

      <div className={styles.securityCard}>
        <div className={styles.securityCardHeader}>
          <div className={styles.securityTitle}>
            <span>
              <ShieldCheck size={19} aria-hidden="true" />
            </span>
            <div>
              <strong>Uwierzytelnianie dwuetapowe</strong>
              <p>Dodaj drugi poziom ochrony przy logowaniu do konta.</p>
            </div>
          </div>
          <span
            className={
              twoFactorEnabled
                ? styles.securityStatusActive
                : styles.securityStatus
            }
          >
            {twoFactorEnabled ? "Aktywne" : "Nieaktywne"}
          </span>
        </div>

        <div className={styles.twoFactorContent}>
          <span>
            {twoFactorEnabled ? (
              <Check size={21} aria-hidden="true" />
            ) : (
              <Smartphone size={21} aria-hidden="true" />
            )}
          </span>
          <div>
            <strong>
              {twoFactorEnabled
                ? "Twoje konto jest dodatkowo chronione"
                : "Kody z aplikacji uwierzytelniającej"}
            </strong>
            <p>
              {twoFactorEnabled
                ? "Przy kolejnym logowaniu poprosimy o jednorazowy kod."
                : "Użyj aplikacji takiej jak Google Authenticator lub Microsoft Authenticator."}
            </p>
          </div>
          <button
            type="button"
            className={
              twoFactorEnabled
                ? styles.secondaryButton
                : styles.primaryButton
            }
            onClick={() => setTwoFactorEnabled((enabled) => !enabled)}
          >
            {twoFactorEnabled ? "Wyłącz" : "Włącz 2FA"}
          </button>
        </div>
      </div>

      <div className={styles.securityCard}>
        <div className={styles.sessionsHeading}>
          <div>
            <strong>Aktywne sesje</strong>
            <p>Urządzenia, na których Twoje konto jest obecnie zalogowane.</p>
          </div>
          {sessions.some((session) => !session.current) && (
            <button
              type="button"
              className={styles.sessionTextButton}
              onClick={() =>
                setSessions((current) =>
                  current.filter((session) => session.current),
                )
              }
            >
              Wyloguj pozostałe
            </button>
          )}
        </div>

        <div className={styles.sessionsList}>
          {sessions.map((session) => {
            const DeviceIcon = session.icon;

            return (
              <div className={styles.sessionRow} key={session.id}>
                <span className={styles.sessionIcon}>
                  <DeviceIcon size={20} aria-hidden="true" />
                </span>
                <div className={styles.sessionInfo}>
                  <strong>
                    {session.device}
                    {session.current && (
                      <small className={styles.currentBadge}>
                        To urządzenie
                      </small>
                    )}
                  </strong>
                  <span>
                    {session.location} · {session.activity}
                  </span>
                </div>
                {!session.current && (
                  <button
                    type="button"
                    className={styles.endSessionButton}
                    aria-label={`Wyloguj sesję ${session.device}`}
                    onClick={() =>
                      setSessions((current) =>
                        current.filter((item) => item.id !== session.id),
                      )
                    }
                  >
                    <LogOut size={16} aria-hidden="true" />
                    Wyloguj
                  </button>
                )}
              </div>
            );
          })}
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
    </div>
  );
}
