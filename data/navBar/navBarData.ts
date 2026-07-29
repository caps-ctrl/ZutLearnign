export type NavBarVariant = "home" | "faq";

export const navBarData = {
  items: [
    { label: "Wykładowcy", href: "/lecturer" },
    { label: "Materiały", href: "/materials" },
    { label: "Społeczność", href: "/spolecznosc" },
    { label: "FAQ", href: "/faq" },
  ],
  action: {
    label: "Dołącz",
    href: "/register",
    showBackArrow: false,
  },
};
