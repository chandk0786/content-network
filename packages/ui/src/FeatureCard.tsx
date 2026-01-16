import React from "react";

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: "violet" | "emerald" | "amber" | "sky" | "pink" | "orange";
  className?: string;
};

export function FeatureCard({ 
  icon, 
  title, 
  description, 
  color = "violet",
  className = "" 
}: FeatureCardProps) {
  const colorStyles = {
    violet: "from-violet-500 to-purple-600 shadow-violet-500/20",
    emerald: "from-emerald-500 to-teal-600 shadow-emerald-500/20",
    amber: "from-amber-500 to-orange-600 shadow-amber-500/20",
    sky: "from-sky-500 to-blue-600 shadow-sky-500/20",
    pink: "from-pink-500 to-rose-600 shadow-pink-500/20",
    orange: "from-orange-500 to-red-600 shadow-orange-500/20",
  };

  return (
    <div className={`group p-6 rounded-3xl bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      <div className={`w-12 h-12 rounded-2xl bg-linear-to-br ${colorStyles[color]} flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}