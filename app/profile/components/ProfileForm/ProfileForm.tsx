"use client";
import { SectionHeading } from "../shared/SectionHeading";
import {
  Camera,
  BriefcaseBusiness,
  Code2,
  Lock,
  Mail,
  Settings2,
} from "lucide-react";
import { ProfileDetail } from "../shared/ProfilDetail";
import styles from "../../profile.module.css";
import type { SubmitEventHandler } from "react";
import { FormActions } from "../shared/FormActions";
import type { ProfileData } from "../../types";

export function ProfileForm({
  profile,
  isEditing,
  onEdit,
  onCancel,
  onSubmit,
}: {
  profile: ProfileData;
  isEditing: boolean;
  onEdit: () => void;
  onCancel: () => void;
  onSubmit: SubmitEventHandler<HTMLFormElement>;
}) {
  const initials = profile.full_name
    ?.trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  const [firstName = "", ...lastNameParts] =
    profile.full_name?.split(" ") ?? [];
  const lastName = lastNameParts.join(" ");

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
          {initials}
        </div>
        <div>
          <h2 className="text-2xl font-bold">{profile.full_name}</h2>
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
              defaultValue={firstName}
              autoComplete="given-name"
            />
          </label>
          <label className={styles.field}>
            <span>Nazwisko</span>
            <input
              name="lastName"
              defaultValue={lastName}
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
                defaultValue={profile.email}
                autoComplete="email"
              />
            </div>
            <small>Adres został zweryfikowany.</small>
          </label>
          <label className={styles.field}>
            <span>Kierunek</span>
            <select name="course" defaultValue={profile.course}>
              <option value="Informatyka">Informatyka</option>
              <option value="Automatyka i robotyka">
                Automatyka i robotyka
              </option>
              <option value="Budownictwo">Budownictwo</option>
              <option value="Zarządzanie">Zarządzanie</option>
            </select>
          </label>
          <label className={styles.field}>
            <span>Semestr</span>
            <select name="semester" defaultValue={profile.semester}>
              {Array.from({ length: 7 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1} semestr
                </option>
              ))}
            </select>
          </label>
          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>Wydział</span>
            <select name="faculty" defaultValue={profile.faculty}>
              <option>Wydział Informatyki</option>
            </select>
          </label>
          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>Zainteresowania</span>
            <input
              name="interests"
              defaultValue={profile.interests?.join(", ") || ""}
              placeholder="np. Front-end, algorytmy, AI"
            />
            <small>Oddziel zainteresowania przecinkami.</small>
          </label>
          <label className={styles.field}>
            <span>GitHub</span>
            <div className={styles.inputWithIcon}>
              <Code2 size={17} aria-hidden="true" />
              <input
                name="githubUrl"
                type="url"
                defaultValue={profile.githubUrl}
                placeholder="https://github.com/uzytkownik"
              />
            </div>
          </label>
          <label className={styles.field}>
            <span>LinkedIn</span>
            <div className={styles.inputWithIcon}>
              <BriefcaseBusiness size={17} aria-hidden="true" />
              <input
                name="linkedinUrl"
                type="url"
                defaultValue={profile.linkedinUrl}
                placeholder="https://linkedin.com/in/uzytkownik"
              />
            </div>
          </label>
          <label className={`${styles.privacyField} ${styles.fullWidth}`}>
            <span className={styles.privacyIcon}>
              <Lock size={18} aria-hidden="true" />
            </span>
            <span className={styles.privacyCopy}>
              <strong>Profil prywatny</strong>
              <small>
                Tylko Ty zobaczysz pełne dane profilu i linki społecznościowe.
              </small>
            </span>
            <input
              className={styles.switch}
              name="isPrivate"
              type="checkbox"
              defaultChecked={profile.isPrivate}
              aria-label="Ustaw profil jako prywatny"
            />
          </label>
          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>O mnie</span>
            <textarea
              name="bio"
              rows={4}
              maxLength={240}
              defaultValue={profile.bio}
            />
            <small>Maksymalnie 240 znaków.</small>
          </label>
        </div>
      ) : (
        <div className={styles.profileDetails}>
          <ProfileDetail label="Adres e-mail" value={false} verified />
          <ProfileDetail label="Kierunek" value={profile.course} />

          {profile.semester !== null && (
            <ProfileDetail
              label="Semestr"
              value={`${profile.semester} semestr`}
            />
          )}
          <ProfileDetail label="Wydział" value={profile.faculty} />
          <ProfileDetail
            label="Widoczność profilu"
            value={profile.isPrivate ? "Profil prywatny" : "Profil publiczny"}
            status={profile.isPrivate ? "private" : "public"}
          />
          <ProfileDetail
            label="Zainteresowania"
            value={
              <span className={styles.interestList}>
                {profile.interests?.map((interest) => (
                  <span key={interest}>{interest}</span>
                ))}
              </span>
            }
            wide
          />
          <ProfileDetail
            label="GitHub"
            value={
              <a href={profile.githubUrl} target="_blank" rel="noreferrer">
                <Code2 size={16} aria-hidden="true" />
                {profile.githubUrl?.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            }
          />
          <ProfileDetail
            label="LinkedIn"
            value={
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                <BriefcaseBusiness size={16} aria-hidden="true" />
                {profile.linkedinUrl?.replace(/^https?:\/\/(www\.)?/, "")}
              </a>
            }
          />
          <ProfileDetail label="O mnie" value={profile.bio} wide />
        </div>
      )}

      {isEditing && <FormActions onCancel={onCancel} />}
    </form>
  );
}
