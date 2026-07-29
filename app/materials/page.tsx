import type { Metadata } from "next";
import { NavBar } from "@/components/layout/Navbar/NavBar";
import MaterialsDirectory from "./MaterialsDirectory";
import styles from "./materials.module.css";

export const metadata: Metadata = {
  title: "Materiały studenckie | uniCheat",
  description:
    "Notatki, opracowania, zestawy zadań i materiały przekazane przez poprzednich studentów ZUT.",
};

export default function MaterialsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <NavBar />

        <section className={styles.hero} aria-labelledby="materials-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Wiedza przekazywana dalej</p>
            <h1 id="materials-title">
              Materiały od studentów, <span>dla studentów.</span>
            </h1>
            <p>
              Korzystaj z notatek, opracowań i zestawów zadań przygotowanych
              przez osoby, które zaliczały te przedmioty przed Tobą.
            </p>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.documentBack} />
            <div className={styles.document}>
              <span>PDF</span>
              <i />
              <i />
              <i />
              <strong>ALGORYTMY</strong>
            </div>
            <div className={styles.spark}>✦</div>
          </div>
        </section>

        <div className={styles.trustBar}>
          <div>
            <strong>2 400+</strong>
            <span>dostępnych materiałów</span>
          </div>
          <div>
            <strong>380</strong>
            <span>przedmiotów</span>
          </div>
          <div>
            <strong>4.8/5</strong>
            <span>średnia ocena</span>
          </div>
          <p>
            Materiały pochodzą od społeczności. Zawsze porównuj je z aktualnymi
            wymaganiami prowadzącego.
          </p>
        </div>

        <MaterialsDirectory />
      </div>
    </main>
  );
}
