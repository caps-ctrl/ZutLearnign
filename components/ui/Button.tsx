import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";
type ButtonFontWeight = "normal" | "medium" | "semibold" | "bold" | "extrabold";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fontWeight?: ButtonFontWeight;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--green)] text-white shadow-[0_12px_24px_rgba(4,103,4,0.3)] hover:brightness-95 focus-visible:ring-green-500",

  secondary:
    "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus-visible:ring-zinc-400",

  ghost:
    "bg-transparent text-zinc-900 hover:bg-zinc-100 focus-visible:ring-zinc-400",

  danger: "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-base",
  lg: "min-h-13 px-7 text-lg",
};

const fontWeightStyles: Record<ButtonFontWeight, string> = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  fontWeight = "bold",
  isLoading = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled,
  type = "button",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-lg
        border-0
        cursor-pointer
        transition-colors
        duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-offset-2
        disabled:pointer-events-none
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <>
          <span
            className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-current
              border-t-transparent
            "
            aria-hidden="true"
          />

          <span className={fontWeightStyles[fontWeight]}>Ładowanie...</span>
        </>
      ) : (
        <>
          {leftIcon && <span aria-hidden="true">{leftIcon}</span>}

          <span className={fontWeightStyles[fontWeight]}>{children}</span>

          {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
        </>
      )}
    </button>
  );
}
