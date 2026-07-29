"use client";

import {
  BookOpen,
  GraduationCap,
  MessageSquareText,
  Search,
  SlidersHorizontal,
  Star,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import { lecturers } from "@/data/lecturers/lecturersData";
import styles from "./wykladowcy.module.css";

const faculties = [
  "Wszystkie",
  ...new Set(lecturers.map((item) => item.faculty)),
];

export default function LecturersDirectory() {
  const [query, setQuery] = useState("");
  const [faculty, setFaculty] = useState("Wszystkie");

  const visibleLecturers = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pl");

    return lecturers.filter((lecturer) => {
      const matchesFaculty =
        faculty === "Wszystkie" || lecturer.faculty === faculty;
      const searchableContent = [
        lecturer.name,
        lecturer.faculty,
        ...lecturer.subjects,
      ]
        .join(" ")
        .toLocaleLowerCase("pl");

      return matchesFaculty && searchableContent.includes(normalizedQuery);
    });
  }, [faculty, query]);

  return (
    <section className={styles.directory} aria-labelledby="directory-title">
      <div className={styles.toolbar}>
        <div>
          <h2 id="directory-title">Katalog wykładowców</h2>
          <p>
            {visibleLecturers.length}{" "}
            {visibleLecturers.length === 1
              ? "znaleziony profil"
              : "znalezionych profili"}
          </p>
        </div>
        <div className={styles.controls}>
          <label className={styles.search}>
            <Search size={18} aria-hidden="true" />
            <span className={styles.visuallyHidden}>
              Szukaj wykładowcy lub przedmiotu
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Nazwisko lub przedmiot..."
            />
          </label>
          <label className={styles.select}>
            <SlidersHorizontal size={17} aria-hidden="true" />
            <span className={styles.visuallyHidden}>Filtruj po wydziale</span>
            <select
              value={faculty}
              onChange={(event) => setFaculty(event.target.value)}
            >
              {faculties.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {visibleLecturers.length > 0 ? (
        <div className={styles.grid}>
          {visibleLecturers.map((lecturer) => (
            <article className={styles.card} key={lecturer.id}>
              <div className={styles.cardTop}>
                <div
                  className={`${styles.avatar} ${styles[lecturer.color]}`}
                  aria-hidden="true"
                >
                  {lecturer.initials}
                </div>
                <span className={styles.facultyBadge}>
                  <GraduationCap size={14} aria-hidden="true" />
                  {lecturer.shortFaculty}
                </span>
              </div>

              <div className={styles.cardBody}>
                <h3>{lecturer.name}</h3>
                <p className={styles.facultyName}>{lecturer.faculty}</p>

                <div className={styles.rating}>
                  <span>
                    <Star size={17} fill="currentColor" aria-hidden="true" />
                    <strong>{lecturer.rating.toFixed(1)}</strong>
                  </span>
                  <span className={styles.reviewCount}>
                    <MessageSquareText size={15} aria-hidden="true" />
                    {lecturer.reviews} opinii
                  </span>
                </div>

                <div className={styles.subjects}>
                  <span className={styles.subjectsLabel}>
                    <BookOpen size={15} aria-hidden="true" />
                    Prowadzone przedmioty
                  </span>
                  <ul>
                    {lecturer.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                className={styles.cardAction}
                href={`/lecturer/${lecturer.slug}`}
                aria-label={`Zobacz profil: ${lecturer.name}`}
              >
                Zobacz profil
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <Search size={28} aria-hidden="true" />
          <h3>Brak pasujących wykładowców</h3>
          <p>Zmień wyszukiwaną frazę lub wybierz inny wydział.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFaculty("Wszystkie");
            }}
          >
            Wyczyść filtry
          </button>
        </div>
      )}
    </section>
  );
}
