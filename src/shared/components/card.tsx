// components/ui/card.tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({ children, className = "", padding = "md" }: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-2",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      className={`rounded border border-neutral-600 bg-neutral-800 ${paddingClasses[padding]} ${className} `}
    >
      {children}
    </div>
  );
}
