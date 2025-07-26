import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva("", {
  variants: {
    size: {
      default:
        "placeholder:text-muted-foreground flex w-full min-w-0 border border-neutral-600 bg-neutral-800 p-3 font-mono text-neutral-100 caret-teal-500 focus:border-teal-500 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-destructive/20 focus:outline-none aria-invalid:border-destructive",
      large: "",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

function Input({
  className,
  type,
  size,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  );
}

export { Input };
