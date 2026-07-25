import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import RocketScrollAnimation from "./RocketScrollAnimation";

export const metadata: Metadata = {
  title: "FAQ | uniCheat",
  description:
    "Odpowiedzi na najczęściej zadawane pytania dotyczące platformy uniCheat.",
};

const faqGroups = [
  {
    label: "Pierwsze kroki",
    questions: [
      {
        question: "Czym jest uniCheat?",
        answer:
          "uniCheat to miejsce tworzone z myślą o studentach ZUT. Łączymy notatki, materiały, opinie o prowadzących i praktyczne wskazówki, aby wszystko potrzebne do nauki było łatwiejsze do znalezienia.",
      },
      {
        question: "Kto może korzystać z platformy?",
        answer:
          "Platforma jest kierowana przede wszystkim do studentów ZUT. Wraz z rozwojem projektu chcemy obejmować kolejne kierunki, wydziały i semestry.",
      },
      {
        question: "Czy korzystanie z uniCheat jest bezpłatne?",
        answer:
          "Podstawowy dostęp do społeczności i udostępnianych materiałów planujemy utrzymać bezpłatnie. Jeśli w przyszłości pojawią się dodatkowe funkcje, ich zasady przedstawimy jasno przed uruchomieniem.",
      },
    ],
  },
  {
    label: "Materiały i społeczność",
    questions: [
      {
        question: "Jak znajdę materiały do swojego przedmiotu?",
        answer:
          "Materiały będą uporządkowane według wydziału, kierunku, semestru i przedmiotu. Będzie można także wyszukać nazwę przedmiotu lub prowadzącego.",
      },
      {
        question: "Czy mogę dodać własne notatki?",
        answer:
          "Tak. uniCheat rozwija się dzięki studentom. Przed udostępnieniem upewnij się tylko, że materiał jest Twojego autorstwa i nie narusza praw innych osób ani zasad uczelni.",
      },
      {
        question: "Czy opinie o prowadzących są anonimowe?",
        answer:
          "Chcemy umożliwić dzielenie się doświadczeniami w bezpieczny sposób. Opinie muszą być rzeczowe, dotyczyć zajęć i pozostawać zgodne z zasadami społeczności.",
      },
    ],
  },
  {
    label: "Bezpieczeństwo i pomoc",
    questions: [
      {
        question: "Czy materiały są sprawdzane?",
        answer:
          "Materiały pochodzą od społeczności, dlatego zawsze warto traktować je jako pomoc w nauce i porównywać z informacjami przekazanymi przez prowadzącego. Zgłoszone błędy i naruszenia będziemy weryfikować.",
      },
      {
        question: "Jak zgłosić błąd albo niewłaściwą treść?",
        answer:
          "Skorzystaj z opcji kontaktu i opisz, czego dotyczy problem. Jeśli to możliwe, dodaj nazwę przedmiotu, materiału lub profilu — dzięki temu szybciej znajdziemy zgłoszoną treść.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]   text-slate-950">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] py-6 sm:py-8">
        <header className="flex min-h-16 bg-red-500 items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-white/90 px-4 shadow-[0_18px_46px_rgba(31,46,77,0.08)] backdrop-blur sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="uniCheat — strona główna"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-600 text-sm font-black text-white">
              uC
            </span>
            <strong className="text-lg">uniCheat</strong>
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg px-3 text-sm font-bold text-slate-600 transition hover:bg-slate-100 hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <span aria-hidden="true">←</span>
            Strona główna
          </Link>
        </header>
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
