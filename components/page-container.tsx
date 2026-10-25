import { cn } from "@/lib/utils"

/** Site-wide content width: 1320px with consistent horizontal padding */
export const containerClass = "max-w-[1320px] mx-auto px-6"

/** Fixed navbar inner bar height */
export const navbarHeightClass = "h-16"

type PageContainerProps = React.ComponentProps<"div"> & {
  as?: "div" | "section" | "header" | "footer" | "main"
}

export function PageContainer({
  as: Tag = "div",
  className,
  ...props
}: PageContainerProps) {
  return <Tag className={cn(containerClass, className)} {...props} />
}
