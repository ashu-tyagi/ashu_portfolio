import type { Metadata } from "next";
import { experiences } from "@/data/portfolio";
import { siteConfig } from "./constants";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: `${siteConfig.name} Portfolio`,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Senior Frontend Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  other: {
    "geo.region": "IN-DL",
    "geo.placename": "Delhi",
  },
};

export function jsonLd() {
  const personId = `${siteConfig.url}/#person`;
  const websiteId = `${siteConfig.url}/#website`;
  const profileId = `${siteConfig.url}/#profilepage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        jobTitle: siteConfig.title,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressRegion: "NCR",
          addressCountry: "IN",
        },
        sameAs: [siteConfig.linkedin],
        knowsAbout: siteConfig.keywords,
        description: siteConfig.description,
        worksFor: {
          "@type": "Organization",
          name: "Apollo 24|7",
        },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: `${siteConfig.name} Portfolio`,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: "en-IN",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": profileId,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.title}`,
        description: siteConfig.description,
        inLanguage: "en-IN",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "ItemList",
        name: "Professional Experience",
        itemListElement: experiences.map((exp, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "OrganizationRole",
            roleName: exp.role,
            startDate: exp.period.split("—")[0]?.trim(),
            worksFor: {
              "@type": "Organization",
              name: exp.company,
            },
          },
        })),
      },
    ],
  };
}
