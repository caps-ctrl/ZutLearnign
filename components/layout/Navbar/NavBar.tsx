import { navItems } from "@/data/home/homePageData";
import styles from "./NavBar.module.css";
import Image from "next/image";
export function NavBar() {
  return (
    <header className={styles.siteHeader} aria-label="Główna nawigacja">
      <a
        className="brand scale-400 overflow-hidden"
        href="#"
        aria-label="uniCheat home"
      >
        <Image src="/icons/uniCheat.svg" alt="logo" width={50} height={50} />
      </a>
      <nav>
        {navItems.map((item) => (
          <a href={`${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className={styles.headerAction} href="register">
        Dołącz
      </a>
    </header>
  );
}
