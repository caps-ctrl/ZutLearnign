import styles from "./faqAnimations.module.css";

export default function RocketScrollAnimation() {
  return (
    <aside
      aria-label="Rakieta reagująca na przewijanie strony"
      className="sticky top-24 hidden h-[560px] w-48 shrink-0 self-start overflow-hidden rounded-[32px]  lg:block"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {[
          [28, 92],
          [142, 126],
          [52, 238],
          [154, 322],
          [34, 430],
          [128, 492],
        ].map(([left, top], index) => (
          <span
            key={`${left}-${top}`}
            className="absolute h-1.5 w-1.5 rounded-full bg-emerald-300/70"
            style={{ left, top, opacity: index % 2 === 0 ? 0.9 : 0.55 }}
          />
        ))}

        <div
          className={`absolute left-1/2 top-1/2 -ml-10 -mt-14 w-20 ${styles.rocket}`}
        >
          <svg viewBox="0 0 96 150" role="presentation">
            <path
              d="M36 112 48 145 60 112Z"
              fill="#f59e0b"
              className={styles.flame}
            />
            <path d="M31 101 13 126l23-7Zm34 0 18 25-23-7Z" fill="#047857" />
            <path
              d="M48 5c-18 15-27 39-27 68 0 20 7 35 15 45h24c8-10 15-25 15-45C75 44 66 20 48 5Z"
              fill="#ffffff"
              stroke="#059669"
              strokeWidth="4"
            />
            <path
              d="M48 5c10 9 17 21 22 36H26C31 26 38 14 48 5Z"
              fill="#10b981"
            />
            <circle
              cx="48"
              cy="66"
              r="12"
              fill="#dbeafe"
              stroke="#047857"
              strokeWidth="4"
            />
            <path d="M38 117h20l-5 10H43Z" fill="#065f46" />
          </svg>
        </div>
      </div>
    </aside>
  );
}
