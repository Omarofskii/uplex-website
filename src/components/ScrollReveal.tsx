import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type RevealVariant = "fadeUp" | "slideLeft" | "slideRight" | "zoom" | "rotateIn";

type ScrollRevealProps = {
  as?: ElementType;
  variant?: RevealVariant;
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  viewportOnce?: boolean;
} & ComponentPropsWithoutRef<"section">;

const variantMap: Record<RevealVariant, string> = {
  fadeUp: "scroll-reveal-fade-up",
  slideLeft: "scroll-reveal-slide-left",
  slideRight: "scroll-reveal-slide-right",
  zoom: "scroll-reveal-zoom",
  rotateIn: "scroll-reveal-rotate-in",
};

export const revealItem = (variant: RevealVariant): string => variantMap[variant];

const ScrollReveal = ({
  as = "section",
  variant = "fadeUp",
  children,
  className,
  staggerChildren = 0.12,
  delayChildren = 0,
  viewportOnce = true,
  ...rest
}: ScrollRevealProps) => {
  const Component = as;
  const revealClassName = variantMap[variant];
  const combinedClassName = [className, revealClassName].filter(Boolean).join(" ");
  void staggerChildren;
  void delayChildren;
  void viewportOnce;

  return (
    <Component
      className={combinedClassName}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
