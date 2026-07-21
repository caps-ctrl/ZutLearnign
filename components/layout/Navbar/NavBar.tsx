import { navItems } from "@/data/homePageData";
import styles from "./NavBar.module.css";
export function NavBar() {
  return (
    <header className={styles.siteHeader} aria-label="Główna nawigacja">
      <a className="brand" href="#" aria-label="uniCheat home">
        <span>uC</span>
        <strong>uniCheat</strong>
      </a>
      <nav>
        {navItems.map((item) => (
          <a href={`#${item.toLowerCase()}`} key={item}>
            {item}
          </a>
        ))}
      </nav>
      <a className={styles.headerAction} href="#start">
        Dołącz
      </a>
    </header>
  );
}
