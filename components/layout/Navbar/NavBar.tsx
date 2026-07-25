import {
  navBarData,
  type NavBarVariant,
} from "@/data/navBar/navBarData";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

type NavBarProps = {
  variant?: NavBarVariant;
};

export function NavBar({ variant = "home" }: NavBarProps) {
  const navigation = navBarData[variant];

  return (
    <header className={styles.siteHeader} aria-label="Główna nawigacja">
      <Link
        className="brand scale-400 overflow-hidden"
        href="/"
        aria-label="uniCheat — strona główna"
      >
        <Image src="/icons/uniCheat.svg" alt="logo" width={50} height={50} />
      </Link>
      {navigation.items.length > 0 && (
        <nav aria-label="Główne menu">
          {navigation.items.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
      )}
      <Link
        className={
          navigation.action.showBackArrow
            ? styles.headerBackAction
            : styles.headerAction
        }
        href={navigation.action.href}
      >
        {navigation.action.showBackArrow && (
          <span aria-hidden="true">←</span>
        )}
        {navigation.action.label}
      </Link>
    </header>
  );
}
