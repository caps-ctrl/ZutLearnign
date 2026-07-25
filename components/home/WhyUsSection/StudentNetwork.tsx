import { Icon } from "../../ui/Icon";
import styles from "./whyUsSection.module.css";
import { studentCards, positions } from "@/data/home/homePageData";
export function StudentNetwork() {
  return (
    <div
      className="
        relative
        isolate
        grid
        h-full
        w-full
        grid-cols-2
        gap-8
        rounded-[40px]
        border
        border-emerald-200
        bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.14),rgba(255,255,255,0.96)_68%)]
        p-8
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          rounded-[40px]
          bg-emerald-300/10
          blur-3xl
        "
      />

      <svg
        className="
          pointer-events-none
          absolute
          inset-[57px]
          z-0
          h-[calc(100%-114px)]
          w-[calc(100%-114px)]
          overflow-visible
          drop-shadow-[0_1px_4px_rgba(5,150,105,0.35)]
        "
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="networkLineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#047857" />
            <stop offset="45%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#65a30d" />
          </linearGradient>

          <filter id="networkGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="0"
          y="0"
          width="100"
          height="100"
          rx="6"
          fill="rgba(236,253,245,0.16)"
          stroke="url(#networkLineGradient)"
          strokeWidth="2"
          filter="url(#networkGlow)"
        />

        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="url(#networkLineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#networkGlow)"
        />

        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="url(#networkLineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#networkGlow)"
        />

        <g className={styles.networkPacket}>
          <animateMotion
            dur="9s"
            path="M 0 0 L 100 100 L 0 100 L 100 0 L 0 0"
            repeatCount="indefinite"
            rotate="auto"
          />

          <g className={styles.networkPacketPulse}>
            <circle className={styles.networkPacketHalo} cx="0" cy="0" r="6" />
            <rect
              className={styles.networkPacketBody}
              x="-4.5"
              y="-3"
              width="9"
              height="6"
              rx="2"
            />
            <path
              className={styles.networkPacketMark}
              d="M -2.5 -1.2 L 0 0.8 L 2.5 -1.2"
            />
          </g>
        </g>

        <g className={styles.networkPacket}>
          <animateMotion
            dur="9s"
            path="M 0 100 L 100 0 L 100 100 L  50 50  L  100 0 L 0 0 L 0 100  "
            repeatCount="indefinite"
            rotate="auto"
          />

          <g className={styles.networkPacketPulse}>
            <circle className={styles.networkPacketHalo} cx="0" cy="0" r="6" />
            <rect
              className={styles.networkPacketBody}
              x="-4.5"
              y="-3"
              width="9"
              height="6"
              rx="2"
            />
            <path
              className={styles.networkPacketMark}
              d="M -2.5 -1.2 L 0 0.8 L 2.5 -1.2"
            />
          </g>
        </g>

        <g className={styles.networkPacket}>
          <animateMotion
            dur="9s"
            path="M 0 100 L 100 100 L 100 0 L 0 100 L 0 0 L 100 0  L 100 100 L 0 100"
            repeatCount="indefinite"
            rotate="auto"
          />

          <g className={styles.networkPacketPulse}>
            <circle className={styles.networkPacketHalo} cx="0" cy="0" r="6" />

            <rect
              className={styles.networkPacketBody}
              x="-4.5"
              y="-3"
              width="9"
              height="6"
              rx="2"
            />

            <path
              className={styles.networkPacketMark}
              d="M -2.5 -1.2 L 0 0.8 L 2.5 -1.2"
            />
          </g>
        </g>
      </svg>

      {studentCards.map((card, i) => (
        <article
          key={`${card.name}-${i}`}
          className={`
            group
            relative
            z-10
            ${positions[i]}
          `}
        >
          <div
            className="
              absolute
              inset-0
              rounded-2xl
              bg-emerald-400/30
              blur-xl
              transition-all
              duration-300
              group-hover:bg-emerald-400/45
              group-hover:blur-2xl
            "
          />

          <div
            className={`
              relative
              grid
              h-16
              w-16
              place-items-center
              rounded-2xl
              border
              border-emerald-400
              bg-gradient-to-br
              ${card.tone}
              text-emerald-950
              shadow-[0_4px_12px_rgba(6,78,59,0.2),0_0_18px_rgba(16,185,129,0.35)]
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:border-emerald-600
              group-hover:shadow-[0_6px_16px_rgba(6,78,59,0.28),0_0_24px_rgba(16,185,129,0.5)]
            `}
          >
            <Icon name="user" size={30} />
          </div>
        </article>
      ))}
    </div>
  );
}
