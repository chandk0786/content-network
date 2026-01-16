import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "default" | "success" | "warning" | "info" | "purple" | "pink";
};

export function Badge({ 
  variant = "default", 
  className = "", 
  children,
  ...props 
}: BadgeProps) {
  const baseStyles = "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold transition-colors";

  const variantStyles = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    info: "bg-sky-100 text-sky-700",
    purple: "bg-violet-100 text-violet-700",
    pink: "bg-pink-100 text-pink-700",
  };

  return (
    <span 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {children}
    </span>
  );
}