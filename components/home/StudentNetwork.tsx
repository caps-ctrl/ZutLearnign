import { Icon } from "../ui/Icon";

const studentCards = [
  {
    name: "Aktywni studenci",
    value: "1.2k",
    tone: "from-emerald-300 to-cyan-300",
  },
  {
    name: "Nowe notatki",
    value: "340",
    tone: "from-cyan-300 to-blue-400",
  },
  {
    name: "Wspólne odpowiedzi",
    value: "89%",
    tone: "from-blue-300 to-violet-400",
  },
  {
    name: "Szybka pomoc",
    value: "24/7",
    tone: "from-lime-300 to-emerald-300",
  },
  {
    name: "Szybka pomoc",
    value: "24/7",
    tone: "from-lime-300 to-emerald-300",
  },
];

const positions = [
  "col-start-1",
  "col-start-3",
  "col-start-2",
  "col-start-1",
  "col-start-3",
];

export function StudentNetwork() {
  return (
    <div
      className="
        relative isolate
        grid w-200 grid-cols-2 gap-6
        before:pointer-events-none
        before:absolute
        before:inset-[27px]
        before:rounded-3xl
        before:border-[3px]
        before:border-black
        before:content-['']
      "
    >
      {studentCards.map((card, i) => (
        <article
          key={`${card.name}-${i}`}
          className={`relative z-10 ${positions[i]}`}
        >
          <div
            className={`
              grid h-14 w-14 place-items-center rounded-xl
              bg-gradient-to-br ${card.tone}
              text-slate-950
              shadow-[0_0_22px_rgba(45,212,191,0.45)]
              transition-transform duration-300
              group-hover:scale-105
            `}
          >
            <Icon name="user" size={30} />
          </div>
        </article>
      ))}
    </div>
  );
}
