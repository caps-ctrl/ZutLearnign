"use client";

import { useId, useState } from "react";
import styles from "./faqAnimations.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const idPrefix = useId();
  return (
    <div className="space-y-3 w-150">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const answerId = `${idPrefix}-answer-${index}`;

        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border bg-white shadow-[0_10px_35px_rgba(31,46,77,0.06)] transition-colors duration-300 ${
              isOpen ? "border-emerald-200" : "border-emerald-100"
            }`}
          >
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left font-extrabold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-emerald-500 sm:px-6"
              aria-expanded={isOpen}
              aria-controls={answerId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.question}
              <span
                aria-hidden="true"
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-xl text-emerald-700 ${styles.plus} ${
                  isOpen ? `bg-emerald-100 ${styles.plusOpen}` : "bg-emerald-50"
                }`}
              >
                +
              </span>
            </button>

            <div
              id={answerId}
              role="region"
              aria-hidden={!isOpen}
              className={`${styles.answerPanel} ${isOpen ? styles.answerPanelOpen : ""}`}
            >
              <div className={styles.answerInner}>
                  <p className="border-t border-emerald-50 px-5 py-5 text-sm leading-7 text-slate-600 sm:px-6 sm:text-base">
                    {item.answer}
                  </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
