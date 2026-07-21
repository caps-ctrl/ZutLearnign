"use client";

import { Icon } from "@/components/ui/Icon";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: "search" as const,
    eyebrow: "Zacznij od wyszukiwarki",
    title: "Znajdź swój przedmiot",
    description:
      "Wyszukaj kierunek, przedmiot lub prowadzącego. Zamiast przekopywać grupy i foldery, od razu trafiasz do właściwego miejsca.",
    result: "Materiały dopasowane do Twoich zajęć",
    position: "top-20 z-10 sm:top-24",
    accent: "from-emerald-700 to-emerald-900",
  },
  {
    number: "02",
    icon: "book" as const,
    eyebrow: "Wiedza w jednym miejscu",
    title: "Przeglądaj notatki i wskazówki",
    description:
      "Korzystaj z opracowań, pytań z poprzednich lat i praktycznych porad dodanych przez osoby, które znają dany przedmiot.",
    result: "Mniej szukania, więcej konkretnej nauki",
    position: "top-24 z-20 sm:top-28",
    accent: "from-green-700 to-emerald-950",
  },
  {
    number: "03",
    icon: "star" as const,
    eyebrow: "Podejmuj lepsze decyzje",
    title: "Sprawdź profile wykładowców",
    description:
      "Przeczytaj opinie innych studentów, zobacz oceny i dowiedz się, na co warto zwrócić uwagę przed pierwszymi zajęciami.",
    result: "Wiesz, czego się spodziewać",
    position: "top-28 z-30 sm:top-32",
    accent: "from-teal-700 to-emerald-950",
  },
  {
    number: "04",
    icon: "users" as const,
    eyebrow: "Społeczność napędza platformę",
    title: "Dodaj coś od siebie",
    description:
      "Udostępnij notatki, odpowiedz na pytanie lub dodaj opinię. Każdy wkład pomaga kolejnym studentom przejść przez semestr łatwiej.",
    result: "Pomagasz innym i rozwijasz uniCheat",
    position: "top-28  z-40 sm:top-36",
    accent: "from-lime-700 to-emerald-950",
  },
  {
    number: "05",
    icon: "users" as const,
    eyebrow: "Społeczność napędza platformę",
    title: "Dodaj coś od siebie",
    description:
      "Udostępnij notatki, odpowiedz na pytanie lub dodaj opinię. Każdy wkład pomaga kolejnym studentom przejść przez semestr łatwiej.",
    result: "Pomagasz innym i rozwijasz uniCheat",
    position: "top-2 invisibility  z-40 sm:top-36",
    accent: "from-lime-700 to-emerald-950",
  },
];

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    setHasReachedEnd(progress >= 0.95);
  });

  const exitTransition = {
    duration: shouldReduceMotion ? 0 : 0.75,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <section
      ref={sectionRef}
      className="relative sm:py-28"
      aria-labelledby="how-it-works-title"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
        <motion.div
          className="lg:sticky lg:top-24"
          animate={{
            x: hasReachedEnd && !shouldReduceMotion ? "-120vw" : 0,
            opacity: hasReachedEnd && !shouldReduceMotion ? 0 : 1,
          }}
          transition={exitTransition}
        >
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            Cztery proste kroki
          </p>
          <h2
            id="how-it-works-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Jak działa <span className="text-emerald-600">uniCheat?</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
            Przewiń niżej i zobacz, jak od pierwszego wyszukania trafiasz do
            wiedzy tworzonej przez całą społeczność.
          </p>

          <div className="mt-8 hidden items-center gap-3 text-sm font-semibold text-emerald-700 lg:flex">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-emerald-200 bg-emerald-50">
              ↓
            </span>
            Przewijaj, aby odkryć kolejne kroki
          </div>

          <div className="mt-7 overflow-hidden rounded-full bg-emerald-100">
            <motion.div
              className="h-2 origin-left rounded-full bg-gradient-to-r from-emerald-500 to-lime-500"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
          <p className="mt-2 text-xs font-semibold text-slate-500">
            Postęp sekcji
          </p>
        </motion.div>

        <ol className="relative ">
          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              className={`sticky ${step.position} ${index < steps.length - 1 ? "mb-[42vh]" : "mb-["} `}
              animate={{
                x: hasReachedEnd && !shouldReduceMotion ? "120vw" : 0,
                opacity: hasReachedEnd && !shouldReduceMotion ? 0 : 1,
              }}
              transition={{
                ...exitTransition,
                delay: hasReachedEnd ? index * 0.045 : 0,
              }}
            >
              <article
                className={`relative min-h-[330px] overflow-hidden rounded-[28px] border border-white/20 bg-gradient-to-br ${step.accent} p-6 text-white shadow-[0_24px_70px_rgba(6,78,59,0.3)] sm:min-h-[360px] sm:p-8`}
              >
                <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
                <span className="pointer-events-none absolute right-5 bottom-0 text-[112px] leading-none font-black text-white/[0.06] sm:text-[150px]">
                  {step.number}
                </span>

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-emerald-700 shadow-lg">
                      <Icon name={step.icon} size={28} />
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold tracking-[0.14em] text-emerald-50">
                      KROK {step.number}
                    </span>
                  </div>

                  <div className="mt-10 max-w-lg">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">
                      {step.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-emerald-50/85 sm:text-base sm:leading-7">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative mt-auto pt-7">
                    <div className="flex w-fit items-center gap-2 rounded-full border border-lime-200/25 bg-lime-300/15 px-4 py-2 text-xs font-semibold text-lime-50 sm:text-sm">
                      <Icon name="check" size={17} />
                      {step.result}
                    </div>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
