import type { Metadata } from "next";
import { NavBar } from "@/components/layout/Navbar/NavBar";
import LecturersDirectory from "./LecturersDirectory";
import styles from "./wykladowcy.module.css";

export const metadata: Metadata = {
  title: "Wykładowcy | uniCheat",
  description:
    "Znajdź wykładowców, prowadzone przedmioty i opinie społeczności studentów ZUT.",
};

export default function LecturersPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <NavBar />
        <section className={styles.hero} aria-labelledby="lecturers-title">
          <p className={styles.eyebrow}>Poznaj prowadzących</p>
          <h1 id="lecturers-title">
            Wykładowcy <span>ZUT</span>
          </h1>
          <p className={styles.lead}>
            Wyszukaj prowadzącego, sprawdź przedmioty i zobacz, co o zajęciach
            mówi społeczność studentów.
          </p>
          <div className={styles.heroStats} aria-label="Statystyki katalogu">
            <div>
              <strong>120+</strong>
              <span>wykładowców</span>
            </div>
            <div>
              <strong>8</strong>
              <span>wydziałów</span>
            </div>
            <div>
              <strong>1 840</strong>
              <span>opinii studentów</span>
            </div>
          </div>
        </section>

        <LecturersDirectory />
      </div>
    </main>
  );
}
