import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type TextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function DisplayText<T extends ElementType = "h1">({
  as,
  children,
  className = "",
  ...props
}: TextProps<T>) {
  const Component = as ?? "h1";
  return (
    <Component className={`font-display tracking-luxury ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function Eyebrow({ children, className = "" }: TextProps<"p">) {
  return <p className={`font-sans text-[0.64rem] uppercase tracking-[0.34em] ${className}`}>{children}</p>;
}
