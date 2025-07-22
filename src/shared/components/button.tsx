// components/ui/button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "danger" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const baseClasses =
    "cursor-pointer border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

  const variants = {
    primary:
      "border-neutral-600 bg-neutral-800 text-neutral-100 hover:bg-teal-600",
    danger: "border-neutral-600 bg-red-800 text-neutral-100 hover:bg-red-600",
    ghost:
      "border-transparent bg-transparent text-neutral-100 hover:bg-neutral-700",
  };

  const sizes = {
    sm: "p-2 text-sm",
    md: "p-3 text-lg",
    lg: "p-4 text-2xl",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
