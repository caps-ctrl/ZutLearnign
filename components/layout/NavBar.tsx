import { navItems } from "@/data/homePageData";

export function NavBar() {
  return (
    <header className=" site-header " aria-label="Główna nawigacja">
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
      <a className="header-action" href="#start">
        Dołącz
      </a>
    </header>
  );
}
