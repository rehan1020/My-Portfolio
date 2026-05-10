import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface RetroCardProps extends HTMLMotionProps<"div"> {
  title?: string;
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export function RetroCard({ title, children, className, hoverGlow = true, ...props }: RetroCardProps) {
  return (
    <motion.div
      className={cn(
        "relative border border-primary/40 bg-card/80 p-6 crt-box-glow group overflow-hidden",
        hoverGlow && "hover:border-primary transition-colors duration-300",
        className
      )}
      {...props}
    >
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary"></div>
      <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary"></div>
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-primary"></div>

      {title && (
        <div className="flex items-center gap-2 mb-4 border-b border-primary/20 pb-2">
          <span className="text-primary/70">{">"}</span>
          <h3 className="font-display text-2xl crt-text-glow">{title}</h3>
        </div>
      )}
      <div className="relative z-10 text-muted-foreground group-hover:text-primary/80 transition-colors">
        {children}
      </div>
    </motion.div>
  );
}
