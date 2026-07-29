import type { Metadata } from "next";
import {
  BookOpen,
  CalendarDays,
  Clock3,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquareText,
  Star,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/layout/Navbar/NavBar";
import { lecturers } from "@/data/lecturers/lecturersData";
import styles from "./lecturerProfile.module.css";

type LecturerProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return lecturers.map((lecturer) => ({ slug: lecturer.slug }));
}

export async function generateMetadata({
  params,
}: LecturerProfilePageProps): Promise<Metadata> {
  const { slug } = await params;
  const lecturer = lecturers.find((item) => item.slug === slug);

  if (!lecturer) {
    return { title: "Nie znaleziono wykładowcy | uniCheat" };
  }

  return {
    title: `${lecturer.name} | uniCheat`,
    description: `Profil prowadzącego ${lecturer.name}: przedmioty, konsultacje i opinie studentów.`,
  };
}

export default async function LecturerProfilePage({
  params,
}: LecturerProfilePageProps) {
  const { slug } = await params;
  const lecturer = lecturers.find((item) => item.slug === slug);

  if (!lecturer) {
    notFound();
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <NavBar />

        <Link href="/lecturer" className={styles.backLink}>
          <span aria-hidden="true">←</span>
          Wróć do katalogu
        </Link>

        <section className={styles.profileHero}>
          <div
            className={`${styles.avatar} ${styles[lecturer.color]}`}
            aria-hidden="true"
          >
            {lecturer.initials}
          </div>
          <div className={styles.identity}>
            <span className={styles.facultyBadge}>
              <GraduationCap size={15} aria-hidden="true" />
              {lecturer.faculty}
            </span>
            <h1>{lecturer.name}</h1>
            <div className={styles.ratingSummary}>
              <span>
                <Star size={19} fill="currentColor" aria-hidden="true" />
                <strong>{lecturer.rating.toFixed(1)}</strong>
              </span>
              <span>
                <MessageSquareText size={17} aria-hidden="true" />
                {lecturer.reviews} opinii
              </span>
            </div>
          </div>
          <a className={styles.contactButton} href={`mailto:${lecturer.email}`}>
            <Mail size={17} aria-hidden="true" />
            Napisz wiadomość
          </a>
        </section>

        <div className={styles.contentGrid}>
          <div className={styles.mainColumn}>
            <section className={styles.card}>
              <h2>O prowadzącym</h2>
              <p className={styles.bio}>{lecturer.bio}</p>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHeading}>
                <span>
                  <BookOpen size={19} aria-hidden="true" />
                </span>
                <div>
                  <h2>Prowadzone przedmioty</h2>
                  <p>Przedmioty przypisane do prowadzącego w tym semestrze.</p>
                </div>
              </div>
              <div className={styles.subjectList}>
                {lecturer.subjects.map((subject, index) => (
                  <div className={styles.subjectRow} key={subject}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{subject}</strong>
                    <Link href="/materials">Zobacz materiały →</Link>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.card}>
              <div className={styles.cardHeading}>
                <span>
                  <Star size={19} aria-hidden="true" />
                </span>
                <div>
                  <h2>Oceny studentów</h2>
                  <p>Średnie oceny na podstawie opinii społeczności.</p>
                </div>
              </div>
              <div className={styles.breakdown}>
                {lecturer.ratingBreakdown.map((rating) => (
                  <div className={styles.ratingRow} key={rating.label}>
                    <span>{rating.label}</span>
                    <div>
                      <i style={{ width: `${(rating.value / 5) * 100}%` }} />
                    </div>
                    <strong>{rating.value.toFixed(1)}</strong>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className={styles.sideColumn}>
            <section className={styles.infoCard}>
              <h2>Informacje</h2>
              <dl>
                <div>
                  <dt>
                    <MapPin size={17} aria-hidden="true" /> Pokój
                  </dt>
                  <dd>{lecturer.office}</dd>
                </div>
                <div>
                  <dt>
                    <CalendarDays size={17} aria-hidden="true" /> Konsultacje
                  </dt>
                  <dd>{lecturer.consultations}</dd>
                </div>
                <div>
                  <dt>
                    <Mail size={17} aria-hidden="true" /> E-mail
                  </dt>
                  <dd>
                    <a href={`mailto:${lecturer.email}`}>{lecturer.email}</a>
                  </dd>
                </div>
              </dl>
            </section>

            <section className={styles.tipCard}>
              <Clock3 size={21} aria-hidden="true" />
              <strong>Przed konsultacjami</strong>
              <p>
                Sprawdź aktualny termin i przygotuj konkretne pytania do
                prowadzącego.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}
