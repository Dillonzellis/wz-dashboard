import { cn } from "@/lib/utils";

export function Label({
  className,
  htmlFor,
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("mb-2 block text-sm font-medium text-gray-400", className)}
      {...props}
    />
  );
}
