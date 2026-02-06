import { HTMLAttributes, ReactNode } from "react";
import { motion, MotionProps, useReducedMotion } from "framer-motion";

type RevealVariant = "fadeUp" | "slideLeft" | "slideRight" | "zoom" | "rotateIn";

type ScrollRevealProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: RevealVariant;
  children: ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
  viewportOnce?: boolean;
} & HTMLAttributes<HTMLElement>;

const variantMap: Record<RevealVariant, MotionProps["variants"]> = {
  fadeUp: {
    hidden: { opacity: 0, y: 72, filter: "blur(16px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -96, filter: "blur(14px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  slideRight: {
    hidden: { opacity: 0, x: 96, filter: "blur(14px)" },
    show: { opacity: 1, x: 0, filter: "blur(0px)" },
  },
  zoom: {
    hidden: { opacity: 0, scale: 0.86, filter: "blur(16px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)" },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, y: 48, filter: "blur(14px)" },
    show: { opacity: 1, rotate: 0, y: 0, filter: "blur(0px)" },
  },
};

export const revealItem = (variant: RevealVariant): MotionProps["variants"] => variantMap[variant];

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
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as as keyof typeof motion] ?? motion.section;
  const containerVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: variantMap[variant]?.hidden,
        show: {
          ...variantMap[variant]?.show,
          transition: {
            type: "spring",
            stiffness: 140,
            damping: 18,
            mass: 0.8,
            staggerChildren,
            delayChildren,
          },
        },
      };

  return (
    <Component
      className={className}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "show"}
      viewport={{ once: viewportOnce, amount: 0.2 }}
      variants={containerVariants}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
