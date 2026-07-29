import { navBarData } from "@/data/navBar/navBarData";
import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export async function NavBar() {
  const navigation = navBarData;
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const isAuthenticated = Boolean(data?.claims?.sub);
  const action = isAuthenticated
    ? { label: "Mój profil", href: "/profile" }
    : navigation.action;

  return (
    <header className={styles.siteHeader} aria-label="Główna nawigacja">
      <Link
        className="brand scale-400 overflow-hidden"
        href="/"
        aria-label="uniCheat — strona główna"
      >
        <Image src="/icons/uniCheat.svg" alt="logo" width={50} height={50} />
      </Link>
      {
        <nav aria-label="Główne menu">
          {navigation.items.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
      }
      <Link className={styles.headerAction} href={action.href}>
        {action.label}
      </Link>
    </header>
  );
}
