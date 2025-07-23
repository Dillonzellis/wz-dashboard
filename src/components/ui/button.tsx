import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger" | "ghost" | "success";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      children,
      className = "",
      disabled,
      ...props
    },
    ref,
  ) => {
    const baseClasses =
      "cursor-pointer border transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
      primary:
        "border-neutral-600 bg-neutral-800 text-neutral-100 hover:bg-teal-600 focus:ring-teal-500",
      secondary:
        "border-neutral-300 bg-neutral-100 text-neutral-800 hover:bg-neutral-200 focus:ring-neutral-500",
      danger:
        "border-red-600 bg-red-800 text-neutral-100 hover:bg-red-600 focus:ring-red-500",
      ghost:
        "border-transparent bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500",
      success:
        "border-teal-600 bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    };

    const sizes = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-lg",
      lg: "px-6 py-4 text-2xl",
    };

    const widthClass = fullWidth ? "w-full" : "";

    return (
      <button
        ref={ref}
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="flex items-center justify-center">
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
            Loading...
          </div>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
