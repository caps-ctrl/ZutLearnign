export function List(data: string[]) {
  return (
    <aside className="rounded-lg border border-white/25 bg-slate-950/22 p-5 my-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur">
      <p className="text-sm font-bold uppercase tracking-[0.12em] text-green-100">
        Co zyskujesz
      </p>
      <ul className="mt-5 space-y-4">
        {data.map((benefit) => (
          <li className="flex gap-3 text-base font-semibold" key={benefit}>
            <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-green-600">
              ✓
            </span>
            <span className="leading-7 text-white">{benefit}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
