import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";

type BrandLogoProps = {
  /** mark = image only | full = larger logo | withText = logo image + company name */
  variant?: "mark" | "full" | "withText";
  href?: string;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  variant = "mark",
  href = "/",
  className,
  priority = false,
}: BrandLogoProps) {
  const alt = `${siteConfig.name} — ${siteConfig.legalName}`;

  // Logo artwork is navy + orange designed for a light surface.
  // Keep a white plate in both themes so dark mode never washes it out.
  const plateClass = cn(
    "inline-flex items-center justify-center rounded-xl bg-white",
    "shadow-sm ring-1 ring-black/5",
    variant === "mark" && "px-2 py-1",
    variant === "full" && "px-3 py-2",
    variant === "withText" && "px-2 py-1.5"
  );

  const logoImage = (
    <span className={plateClass}>
      <Image
        src="/images/logo.png"
        alt={variant === "withText" ? "" : alt}
        width={320}
        height={360}
        priority={priority}
        className={cn(
          "h-auto w-auto object-contain",
          variant === "mark" && "h-10 md:h-11",
          variant === "full" && "h-20 md:h-24",
          variant === "withText" && "h-12 md:h-14"
        )}
      />
    </span>
  );

  const content =
    variant === "withText" ? (
      <span className={cn("inline-flex items-center gap-3", className)}>
        {logoImage}
        <span className="text-left leading-tight">
          <span className="block text-base font-bold tracking-wide text-foreground md:text-lg">
            {siteConfig.name}
          </span>
          <span className="block text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground md:text-xs">
            {siteConfig.legalName}
          </span>
        </span>
      </span>
    ) : (
      <span className={cn("inline-flex items-center", className)}>{logoImage}</span>
    );

  return (
    <Link href={href} className="inline-flex items-center" aria-label={`${siteConfig.name} home`}>
      {content}
    </Link>
  );
}
