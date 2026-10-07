import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-sage-500",
        className
      )}
    >
      <span className="h-px w-6 bg-sage-400" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow className={cn(align === "center" && "justify-center", light && "text-sage-200")}>{eyebrow}</Eyebrow>
      )}
      <h2
        className={cn(
          "mt-4 font-serif text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]",
          light ? "text-cream-100" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-sage-100/80" : "text-ink-soft")}>
          {description}
        </p>
      )}
    </div>
  );
}

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sage-400 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-100";
const variants = {
  primary: "bg-sage-600 text-cream-50 shadow-soft hover:bg-sage-700 hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "border border-sand-300 bg-white/60 text-ink backdrop-blur hover:border-sage-300 hover:bg-white hover:-translate-y-0.5",
  ghost: "text-sage-600 hover:text-sage-800 hover:bg-sage-50",
  light: "bg-cream-100 text-sage-700 hover:bg-white hover:-translate-y-0.5 shadow-soft",
};
const sizes = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </a>
  );
}

export function Pill({ children, className, icon }: { children: ReactNode; className?: string; icon?: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-cream-50 px-3 py-1 text-xs font-medium text-ink-soft",
        className
      )}
    >
      {icon}
      {children}
    </span>
  );
}
