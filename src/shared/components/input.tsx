// components/ui/input.tsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function Input({
  label,
  helperText,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-2 block text-sm font-medium">{label}</label>
      )}
      <input
        className={`border border-neutral-600 bg-neutral-800 p-4 text-neutral-100 focus:border-teal-600 focus:outline-none ${error ? "border-red-500" : ""} ${className} `}
        {...props}
      />
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-400">{helperText}</p>
      )}
      {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
    </div>
  );
}
