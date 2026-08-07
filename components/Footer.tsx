import BrandLogo from "./BrandLogo";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-muted/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center text-sm text-muted-foreground">
        {/* Footer / other areas: logo with company text */}
        <BrandLogo variant="withText" />

        <p className="max-w-xl">
          © {year} {siteConfig.legalName}. Norway & India technology consulting.
          Also known as Indonor, Indo, and Indonor Tech.
        </p>
      </div>
    </footer>
  );
}
