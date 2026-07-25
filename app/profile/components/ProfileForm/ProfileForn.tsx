"use client";
import { SectionHeading } from "../shared/SectionHeading";
import { Camera, Mail, Settings2 } from "lucide-react";
import { ProfileDetail } from "../shared/ProfilDetail";
import styles from "../../profile.module.css";
import { FormEvent } from "react";
import { FormActions } from "../shared/FormActions";
export function ProfileForm({
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
