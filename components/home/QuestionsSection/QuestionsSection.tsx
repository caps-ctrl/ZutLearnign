import Link from "next/link";

export function QuestionsSection() {
  return (
    <section
      id="faq"
      aria-labelledby="questions-title"
      className="relative mt-20 overflow-hidden rounded-[36px] bg-emerald-950 px-6 py-14 text-white shadow-[0_30px_90px_rgba(6,78,59,0.25)] sm:px-10 sm:py-16 lg:mt-28 lg:px-16 lg:py-20"
    >
      <div className="pointer-events-none absolute -top-36 -right-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-lime-300/15 blur-3xl" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-8 hidden -translate-y-1/2 text-[260px] leading-none font-black text-white/[0.035] lg:block"
      >
        ?
      </span>

      <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
            Jesteśmy tu, żeby pomóc
          </p>
          <h2
            id="questions-title"
            className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl"
          >
            Masz więcej pytań?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50/75 sm:text-lg">
            Zajrzyj do najczęściej zadawanych pytań albo napisz do nas. Chętnie
            pomożemy Ci zacząć i rozwiejemy wszystkie wątpliwości.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <Link
            href="/faq"
            className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl bg-white px-6 font-extrabold text-emerald-950 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
          >
            Przejdź do FAQ
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/kontakt"
            className="inline-flex min-h-13 items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-6 font-extrabold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-950"
          >
            Skontaktuj się
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className="relative mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm font-semibold text-emerald-100/70">
        <span>Odpowiedzi na popularne pytania</span>
        <span>Bezpośredni kontakt z zespołem</span>
      </div>
    </section>
  );
}
