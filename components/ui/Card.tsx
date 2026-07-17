import type { ComponentPropsWithoutRef, ReactNode } from "react";

type CardVariant = "dark" | "green" | "blue" | "white";
type CardSize = "default" | "wide" | "tall";

type CardProps = ComponentPropsWithoutRef<"article"> & {
  title?: string;
  description?: string;
  children?: ReactNode;
  variant?: CardVariant;
  size?: CardSize;
  visualClassName?: string;
  contentClassName?: string;
};

const variantClasses: Record<CardVariant, string> = {
  dark: "border-green-900/70 bg-slate-200/92 shadow-[0_26px_70px_rgba(2,6,23,0.34)]",
  green:
    "border-green-700 bg-green-600/80  border-2 shadow-[0_26px_70px_rgba(4,0,0,0.70)]",
  blue: "border-sky-300/30 bg-slate-950/90 shadow-[0_26px_70px_rgba(37,99,235,0.24)]",
  white:
    "border-black  bg-white border-2 shadow-[0_26px_70px_rgba(4,0,0,0.70)]",
};

const sizeClasses: Record<CardSize, string> = {
  default: "max-h-[320px]",
  wide: "max-h-[320px] md:col-span-2",
  tall: "min-h-[420px] md:row-span-2",
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Card({
  title,
  description,
  children,
  variant = "dark",
  size = "default",
  className,
  visualClassName,
  contentClassName,
  ...props
}: CardProps) {
  return (
    <article
      className={cn(
        "group relative isolate flex overflow-hidden rounded-lg border p-6 text-white",
        "before:absolute before:inset-x-10 before:top-8 before:h-40 before:rounded-full before:bg-white/10 before:blur-3xl before:content-['']",
        "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_50%_20%,rgba(148,163,184,0.20),transparent_42%)] after:content-['']",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      <div className="relative z-10 flex min-h-full text-black w-full flex-col justify-between gap-8">
        {(title || description) && (
          <div className={cn("max-w-xl", contentClassName)}>
            {title && (
              <h3 className="text-2xl font-black  leading-tight tracking-normal md:text-3xl">
                {title}
              </h3>
            )}
            <div
              className={cn("  flex-1 place-items-center ", visualClassName)}
            >
              {children}
            </div>
            {description && (
              <p className="mt-3 text-base font-semibold leading-7 md:text-lg">
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
