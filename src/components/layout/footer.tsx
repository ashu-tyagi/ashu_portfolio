import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-heading text-xl font-semibold">
              {siteConfig.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{siteConfig.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.location}</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.phone}</p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="mb-4 text-sm font-medium">Navigation</p>
            <ul className="flex flex-col gap-2" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-medium">Connect</p>
            <ul className="flex flex-col gap-2" role="list">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  linkedin.com/in/ashutyagi-se
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
