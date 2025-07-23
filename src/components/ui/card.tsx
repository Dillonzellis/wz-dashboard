interface CardProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  clickable?: boolean;
}

export function Card({
  children,
  title,
  subtitle,
  actions,
  onClick,
  className = "",
  padding = "md",
  clickable = false,
}: CardProps) {
  const baseClasses =
    "border border-neutral-600 bg-neutral-800 rounded-lg transition-all duration-200";
  const clickableClasses =
    clickable || onClick
      ? "cursor-pointer hover:bg-neutral-700 hover:border-neutral-500"
      : "";

  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
  };

  return (
    <div
      className={`${baseClasses} ${clickableClasses} ${paddingClasses[padding]} ${className}`}
      onClick={onClick}
    >
      {(title || subtitle || actions) && (
        <div className="mb-4 flex items-start justify-between">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-neutral-100">
                {title}
              </h3>
            )}
            {subtitle && (
              <p className="mt-1 text-sm text-neutral-400">{subtitle}</p>
            )}
          </div>
          {actions && <div className="flex gap-2">{actions}</div>}
        </div>
      )}
      {children}
    </div>
  );
}
