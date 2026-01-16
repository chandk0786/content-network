import React from "react";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`
        group relative rounded-3xl border border-gray-200/60 bg-white 
        shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] 
        transition-all duration-300 ease-out
        hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] 
        hover:-translate-y-1
        hover:border-gray-300/80
        ${className}
      `}
      {...props}
    />
  );
}

export function CardHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`p-6 pb-4 ${className}`} 
      {...props} 
    />
  );
}

export function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={`p-6 pt-2 ${className}`} 
      {...props} 
    />
  );
}

// New: Gradient Card for featured items
export function GradientCard({ 
  className = "", 
  gradient = "from-violet-500 via-purple-500 to-fuchsia-500",
  ...props 
}: React.HTMLAttributes<HTMLDivElement> & { gradient?: string }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Gradient border effect */}
      <div className={`absolute -inset-0.5 bg-linear-to-r ${gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500`} />
      <div
        className="relative rounded-3xl bg-white p-6 shadow-xl transition-all duration-300"
        {...props}
      />
    </div>
  );
}

// New: Glass Card for overlay effects
export function GlassCard({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`
        rounded-3xl border border-white/20 
        bg-white/70 backdrop-blur-xl
        shadow-[0_8px_32px_rgba(0,0,0,0.08)]
        transition-all duration-300
        hover:bg-white/80 hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]
        ${className}
      `}
      {...props}
    />
  );
}

// New: Interactive List Item for tools/posts
export function ListItem({ 
  href, 
  title, 
  description,
  icon,
  className = "" 
}: { 
  href: string; 
  title: string; 
  description: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <a 
      href={href}
      className={`
        group/item flex items-start gap-4 p-4 -mx-4 rounded-2xl
        transition-all duration-200
        hover:bg-gray-50/80
        ${className}
      `}
    >
      {icon && (
        <span className="shrink-0 w-10 h-10 rounded-xl bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center text-gray-600 group-hover/item:scale-110 transition-transform duration-200">
          {icon}
        </span>
      )}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-gray-900 group-hover/item:text-violet-600 transition-colors duration-200 flex items-center gap-2">
          {title}
          <svg 
            className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <div className="text-sm text-gray-500 mt-0.5 line-clamp-2">{description}</div>
      </div>
    </a>
  );
}