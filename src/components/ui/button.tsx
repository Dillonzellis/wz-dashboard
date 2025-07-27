import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-neutral-800 text-neutral-100 transition-all duration-200 border font-semibold border-neutral-600",
  {
    variants: {
      variant: {
        default: "bg-neutral-800 hover:border-teal-600 hover:bg-teal-600",
        destructive: "bg-red-800 hover:bg-red-600",
      },
      size: {
        default: "w-full max-w-lg text-xl p-3",
        large: "text-2xl p-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
