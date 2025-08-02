import { cn } from "@/lib/utils";

interface CardWrapperProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export default function CardWrapper({
  className,
  children,
  ...props
}: CardWrapperProps) {
  return (
    <div
      className={cn("grid gap-4 md:grid-cols-2 lg:grid-cols-3", className)}
      {...props}
    >
      {children}
    </div>
  );
}
