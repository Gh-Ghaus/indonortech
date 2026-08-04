import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border bg-muted/60 py-8 text-center text-sm text-muted-foreground">
      <p className="font-medium text-foreground">
        {siteConfig.name} · {siteConfig.legalName}
      </p>
      <p className="mt-2">
        © {year} {siteConfig.legalName}. Norway & India technology consulting.
      </p>
      <p className="mt-1">
        Also known as Indonor, Indo, and Indonor Tech.
      </p>
    </footer>
  );
}
