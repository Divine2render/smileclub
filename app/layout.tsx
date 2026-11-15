import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Smile Club | Dentistry & Orthodontics in Houston, TX",
    template: "%s | The Smile Club",
  },
  description:
    "The Smile Club Dentistry & Orthodontics in Houston, TX offers general dentistry, Invisalign and braces, cosmetic care, and dental implants. Explore our services and request an appointment.",
  applicationName: "The Smile Club",
  creator: "The Smile Club Dentistry & Orthodontics",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Smile Club Dentistry & Orthodontics",
    title: "The Smile Club | Dentistry & Orthodontics in Houston, TX",
    description:
      "General dentistry, Invisalign and braces, cosmetic care, and dental implants in Houston, TX.",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "The Smile Club | Dentistry & Orthodontics in Houston, TX",
    description:
      "General dentistry, Invisalign and braces, cosmetic care, and dental implants in Houston, TX.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
