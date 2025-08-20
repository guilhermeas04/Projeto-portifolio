import React from "react";
import { useFadeIn } from "../hooks/useFadeIn";

interface FadeInWrapperProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
  className?: string;
}

const FadeInWrapper: React.FC<FadeInWrapperProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
  className = "",
}) => {
  const { elementRef, isVisible } = useFadeIn(threshold);

  return (
    <div
      ref={elementRef}
      className={`fade-in-wrapper ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
