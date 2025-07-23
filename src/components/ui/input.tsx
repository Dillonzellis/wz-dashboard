import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, helperText, error, leftIcon, rightIcon, className = "", ...props },
    ref,
  ) => {
    const baseClasses =
      "w-full border bg-neutral-800 text-neutral-100 transition-colors caret-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const errorClasses = error
      ? "border-red-500 focus:ring-red-500"
      : "border-neutral-600 focus:ring-teal-500";
    const paddingClasses = leftIcon || rightIcon ? "px-10" : "px-4";

    return (
      <div className="flex flex-col">
        {label && (
          <label className="mb-2 block text-sm font-medium text-neutral-100">
            {label}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2 transform text-neutral-400">
              {leftIcon}
            </div>
          )}
          <input
            ref={ref}
            className={`${baseClasses} ${errorClasses} ${paddingClasses} py-3 ${className}`}
            {...props}
          />
          {rightIcon && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2 transform text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-400">{helperText}</p>
        )}
        {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
