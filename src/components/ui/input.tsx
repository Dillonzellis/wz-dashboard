import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "placeholder:text-muted-foreground font-mono text-neutral-100 caret-teal-500 focus:border-teal-500  flex w-full min-w-0 border border-neutral-600 bg-neutral-800 shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 focus:outline-none aria-invalid:border-destructive",
  {
    variants: {
      variantSize: {
        default: "p-3 text-base",
        large: "p-4 text-5xl tracking-widest",
      },
    },
    defaultVariants: {
      variantSize: "default",
    },
  },
);

export function Input({
  className,
  type,
  variantSize,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variantSize, className }))}
      {...props}
    />
  );
}
