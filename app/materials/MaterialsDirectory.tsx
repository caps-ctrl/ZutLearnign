"use client";

import {
  BookOpen,
  CheckCircle2,
  Download,
  FileArchive,
  FileText,
  Search,
  SlidersHorizontal,
  Star,
  Upload,
} from "lucide-react";
import { useMemo, useState } from "react";
import styles from "./materials.module.css";

const materials = [
  {
    id: 1,
    title: "Algorytmy i struktury danych — komplet notatek",
    subject: "Algorytmy i struktury danych",
    faculty: "Informatyka",
    semester: 3,
    type: "Notatki",
    format: "PDF",
    pages: "64 strony",
    author: "Michał, rocznik 2024",
    rating: 4.9,
    votes: 128,
    downloads: 846,
    verified: true,
    color: "emerald",
  },
  {
    id: 2,
    title: "Baza pytań z kolokwiów 2022–2025",
    subject: "Programowanie obiektowe",
    faculty: "Informatyka",
    semester: 3,
    type: "Kolokwia",
    format: "ZIP",
    pages: "18 plików",
    author: "Kasia, rocznik 2023",
    rating: 4.8,
    votes: 94,
    downloads: 621,
    verified: true,
    color: "blue",
  },
  {
    id: 3,
    title: "Mechanika budowli — wzory i przykłady",
    subject: "Mechanika budowli",
    faculty: "Budownictwo",
    semester: 4,
    type: "Opracowanie",
    format: "PDF",
    pages: "42 strony",
    author: "Ola, rocznik 2024",
    rating: 4.7,
    votes: 67,
    downloads: 354,
    verified: false,
    color: "amber",
  },
  {
    id: 4,
    title: "Analiza matematyczna — rozwiązane zadania",
    subject: "Analiza matematyczna",
    faculty: "Informatyka",
    semester: 1,
    type: "Zadania",
    format: "PDF",
    pages: "76 stron",
    author: "Bartek, rocznik 2025",
    rating: 4.9,
    votes: 156,
    downloads: 1024,
    verified: true,
    color: "violet",
  },
  {
    id: 5,
    title: "Mikroekonomia w pigułce",
    subject: "Mikroekonomia",
    faculty: "Ekonomia",
    semester: 2,
    type: "Opracowanie",
    format: "PDF",
    pages: "31 stron",
    author: "Natalia, rocznik 2024",
    rating: 4.6,
    votes: 52,
    downloads: 287,
    verified: false,
    color: "rose",
  },
  {
    id: 6,
    title: "Teoria sterowania — laboratoria 1–8",
    subject: "Teoria sterowania",
    faculty: "Automatyka i robotyka",
    semester: 5,
    type: "Laboratoria",
    format: "ZIP",
    pages: "24 pliki",
    author: "Paweł, rocznik 2023",
    rating: 4.8,
    votes: 81,
    downloads: 492,
    verified: true,
    color: "cyan",
  },
];

const materialTypes = ["Wszystkie typy", ...new Set(materials.map((item) => item.type))];
const semesters = ["Wszystkie semestry", ...new Set(materials.map((item) => item.semester))];

export default function MaterialsDirectory() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("Wszystkie typy");
  const [semester, setSemester] = useState("Wszystkie semestry");

  const visibleMaterials = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("pl");

    return materials.filter((material) => {
      const matchesQuery = [
        material.title,
        material.subject,
        material.faculty,
        material.author,
      ]
        .join(" ")
        .toLocaleLowerCase("pl")
        .includes(normalizedQuery);
      const matchesType = type === "Wszystkie typy" || material.type === type;
      const matchesSemester =
        semester === "Wszystkie semestry" ||
        material.semester === Number(semester);

      return matchesQuery && matchesType && matchesSemester;
    });
  }, [query, semester, type]);

  function resetFilters() {
    setQuery("");
    setType("Wszystkie typy");
    setSemester("Wszystkie semestry");
  }

  return (
    <section className={styles.directory} aria-labelledby="materials-directory">
      <div className={styles.directoryHeading}>
        <div>
          <p className={styles.eyebrow}>Biblioteka społeczności</p>
          <h2 id="materials-directory">Znajdź materiały do nauki</h2>
        </div>
        <button className={styles.addButton} type="button">
          <Upload size={17} aria-hidden="true" />
          Dodaj materiał
        </button>
      </div>

      <div className={styles.filters}>
        <label className={styles.search}>
          <Search size={19} aria-hidden="true" />
          <span className={styles.visuallyHidden}>
            Szukaj materiałów lub przedmiotu
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Wpisz przedmiot, tytuł lub kierunek..."
          />
        </label>
        <label className={styles.select}>
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span className={styles.visuallyHidden}>Wybierz typ materiału</span>
          <select value={type} onChange={(event) => setType(event.target.value)}>
            {materialTypes.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className={styles.select}>
          <span className={styles.visuallyHidden}>Wybierz semestr</span>
          <select
            value={semester}
            onChange={(event) => setSemester(event.target.value)}
          >
            {semesters.map((item) => (
              <option value={item} key={item}>
                {typeof item === "number" ? `${item} semestr` : item}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className={styles.resultBar}>
        <span>
          Znaleziono <strong>{visibleMaterials.length}</strong> materiałów
        </span>
        {(query || type !== "Wszystkie typy" || semester !== "Wszystkie semestry") && (
          <button type="button" onClick={resetFilters}>Wyczyść filtry</button>
        )}
      </div>

      {visibleMaterials.length > 0 ? (
        <div className={styles.grid}>
          {visibleMaterials.map((material) => (
            <article className={styles.card} key={material.id}>
              <div className={styles.cardHeader}>
                <span className={`${styles.fileIcon} ${styles[material.color]}`}>
                  {material.format === "ZIP" ? (
                    <FileArchive size={25} aria-hidden="true" />
                  ) : (
                    <FileText size={25} aria-hidden="true" />
                  )}
                </span>
                <div className={styles.fileMeta}>
                  <span>{material.format}</span>
                  <span>{material.pages}</span>
                </div>
                {material.verified && (
                  <span className={styles.verified}>
                    <CheckCircle2 size={13} aria-hidden="true" />
                    Sprawdzone
                  </span>
                )}
              </div>

              <div className={styles.cardBody}>
                <span className={styles.typeBadge}>{material.type}</span>
                <h3>{material.title}</h3>
                <p className={styles.subject}>
                  <BookOpen size={15} aria-hidden="true" />
                  {material.subject}
                </p>
                <div className={styles.tags}>
                  <span>{material.faculty}</span>
                  <span>{material.semester} semestr</span>
                </div>
              </div>

              <div className={styles.cardFooter}>
                <div>
                  <span className={styles.authorAvatar} aria-hidden="true">
                    {material.author.charAt(0)}
                  </span>
                  <span className={styles.author}>{material.author}</span>
                </div>
                <div className={styles.rating}>
                  <Star size={14} fill="currentColor" aria-hidden="true" />
                  <strong>{material.rating.toFixed(1)}</strong>
                  <span>({material.votes})</span>
                </div>
              </div>

              <button className={styles.downloadButton} type="button">
                <Download size={17} aria-hidden="true" />
                Pobierz materiał
                <span>{material.downloads} pobrań</span>
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <Search size={30} aria-hidden="true" />
          <h3>Nie znaleźliśmy takich materiałów</h3>
          <p>Spróbuj innej frazy albo zmień wybrane filtry.</p>
          <button type="button" onClick={resetFilters}>Pokaż wszystkie</button>
        </div>
      )}
    </section>
  );
}
