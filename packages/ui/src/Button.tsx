import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "gradient" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export function Button({ 
  variant = "primary", 
  size = "md",
  icon,
  iconPosition = "left",
  className = "", 
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold
    transition-all duration-200 ease-out
    active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-sm rounded-2xl",
    lg: "px-8 py-4 text-base rounded-2xl",
  };

  const variantStyles = {
    primary: `
      bg-gray-900 text-white 
      hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/25 hover:-translate-y-0.5
      focus:ring-gray-900
    `,
    secondary: `
      bg-gray-100 text-gray-900 
      hover:bg-gray-200 hover:shadow-md hover:-translate-y-0.5
      focus:ring-gray-400
    `,
    gradient: `
      bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white
      hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5
      focus:ring-purple-500
      relative overflow-hidden
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-fuchsia-600 before:via-purple-600 before:to-violet-600
      before:opacity-0 before:transition-opacity before:duration-300
      hover:before:opacity-100
      [&>*]:relative [&>*]:z-10
    `,
    outline: `
      border-2 border-gray-200 text-gray-700 bg-transparent
      hover:border-gray-900 hover:text-gray-900 hover:-translate-y-0.5
      focus:ring-gray-400
    `,
    ghost: `
      text-gray-600 bg-transparent
      hover:text-gray-900 hover:bg-gray-100
      focus:ring-gray-400
    `,
  };

  return (
    <button 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </button>
  );
}

// Link styled as button
type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "gradient" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
};

export function ButtonLink({ 
  variant = "primary", 
  size = "md",
  icon,
  iconPosition = "left",
  className = "", 
  children,
  ...props 
}: ButtonLinkProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 font-semibold
    transition-all duration-200 ease-out
    active:scale-[0.97]
    focus:outline-none focus:ring-2 focus:ring-offset-2
    no-underline
  `;

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-xl",
    md: "px-6 py-3 text-sm rounded-2xl",
    lg: "px-8 py-4 text-base rounded-2xl",
  };

  const variantStyles = {
    primary: `
      bg-gray-900 text-white 
      hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/25 hover:-translate-y-0.5
      focus:ring-gray-900
    `,
    secondary: `
      bg-gray-100 text-gray-900 
      hover:bg-gray-200 hover:shadow-md hover:-translate-y-0.5
      focus:ring-gray-400
    `,
    gradient: `
      bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white
      hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5
      focus:ring-purple-500
    `,
    outline: `
      border-2 border-gray-200 text-gray-700 bg-transparent
      hover:border-gray-900 hover:text-gray-900 hover:-translate-y-0.5
      focus:ring-gray-400
    `,
    ghost: `
      text-gray-600 bg-transparent
      hover:text-gray-900 hover:bg-gray-100
      focus:ring-gray-400
    `,
  };

  return (
    <a 
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`} 
      {...props}
    >
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </a>
  );
}