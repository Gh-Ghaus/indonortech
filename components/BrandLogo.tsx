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

  const logoImage = (
    <Image
      src="/images/logo.png"
      alt={variant === "withText" ? "" : alt}
      width={320}
      height={360}
      priority={priority}
      className={cn(
        "h-auto w-auto object-contain",
        variant === "mark" && "h-11 md:h-12",
        variant === "full" && "h-20 md:h-24",
        variant === "withText" && "h-14 md:h-16"
      )}
    />
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
