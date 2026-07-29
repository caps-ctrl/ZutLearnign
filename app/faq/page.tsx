import type { Metadata } from "next";
import Link from "next/link";
import { NavBar } from "@/components/layout/Navbar/NavBar";
import FaqAccordion from "./FaqAccordion";
import RocketScrollAnimation from "./RocketScrollAnimation";
import { faqGroups } from "@/data/faq/faqData";
export const metadata: Metadata = {
  title: "FAQ | uniCheat",
  description:
    "Odpowiedzi na najczęściej zadawane pytania dotyczące platformy uniCheat.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]   text-slate-950">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-6 sm:py-8">
        <NavBar />
        <div className="flex justify-evenly items-start  gap-10 xl:gap-16">
          <section aria-labelledby="faq-title" className=" py-16 sm:py-20">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
                Wszystko w jednym miejscu
              </p>
              <h2
                id="faq-title"
                className="mt-3  text-3xl font-black tracking-tight sm:text-4xl"
              >
                Najczęściej zadawane pytania
              </h2>
            </div>

            <div className="mt-10 space-y-10">
              {faqGroups.map((group) => (
                <section
                  key={group.label}
                  aria-labelledby={`faq-${group.label.replaceAll(" ", "-")}`}
                >
                  <h3
                    id={`faq-${group.label.replaceAll(" ", "-")}`}
                    className="mb-4 text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-700"
                  >
                    {group.label}
                  </h3>
                  <FaqAccordion items={group.questions} />
                </section>
              ))}
            </div>
          </section>
          <RocketScrollAnimation />
        </div>
        <section className="mb-10 rounded-[28px] border border-emerald-200 bg-emerald-50 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-black sm:text-3xl">
            Nie znalazłeś odpowiedzi?
          </h2>
          <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600">
            Napisz do nas — chętnie odpowiemy i pomożemy rozwiązać problem.
          </p>
          <Link
            href="/kontakt"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 font-extrabold text-white shadow-[0_12px_24px_rgba(4,103,74,0.22)] transition hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Skontaktuj się z nami <span aria-hidden="true">→</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
