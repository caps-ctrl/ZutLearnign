export type NavBarVariant = "home" | "faq";

export const navBarData = {
  home: {
    items: [
      { label: "Wykładowcy", href: "wykładowcy" },
      { label: "Materiały", href: "materiały" },
      { label: "Społeczność", href: "społeczność" },
      { label: "FAQ", href: "/faq" },
    ],
    action: {
      label: "Dołącz",
      href: "/register",
      showBackArrow: false,
    },
  },
  faq: {
    items: [],
    action: {
      label: "Strona główna",
      href: "/",
      showBackArrow: true,
    },
  },
} as const satisfies Record<
  NavBarVariant,
  {
    items: ReadonlyArray<{ label: string; href: string }>;
    action: {
      label: string;
      href: string;
      showBackArrow: boolean;
    };
  }
>;
