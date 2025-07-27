import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const headingVariants = cva("pb-6 text-3xl font-bold md:text-5xl", {
  variants: {
    variant: {
      default: "",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export function MainHeading({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"h1"> & VariantProps<typeof headingVariants>) {
  return (
    <h1
      className={cn(headingVariants({ variant, size, className }))}
      {...props}
    />
  );
}
