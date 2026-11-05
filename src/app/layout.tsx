import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "INSTYLE Hair & Beauty Salon | Dimapur, Nagaland",
    template: "%s | INSTYLE Hair & Beauty Salon Dimapur",
  },
  description:
    "Premier beauty parlour & salon in Dimapur, Nagaland at DC Court Junction. Internationally certified hair dressing, hair smoothing & botox, 6D microblading, eyelash extensions, lash lift, and custom nail art.",
  keywords: [
    "INSTYLE Hair & Beauty Salon",
    "Dimapur salon",
    "beauty parlour Dimapur Nagaland",
    "hair smoothing Dimapur",
    "eyelash extensions Dimapur",
    "microblading Nagaland",
    "nail art Dimapur",
    "DC Court Junction salon",
    "lash lift Dimapur",
  ],
  authors: [{ name: "INSTYLE Hair & Beauty Salon" }],
  creator: "INSTYLE Hair & Beauty Salon",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://instylebeautybar.com",
    title: "INSTYLE Hair & Beauty Salon | Dimapur, Nagaland",
    description: "Professional hair, skin, nail and beauty services with a personal touch at DC Court Junction, Dimapur.",
    siteName: "INSTYLE Hair & Beauty Salon",
  },
  twitter: {
    card: "summary_large_image",
    title: "INSTYLE Hair & Beauty Salon | Dimapur",
    description: "Internationally Certified Hair Dresser, Permanent Makeup 6D, Lashes & Nails in Dimapur.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { MotionProvider } from '@/components/motion-provider';
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider';
import { ScrollProgressBar } from '@/components/ui/scroll-progress-bar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "INSTYLE Hair & Beauty Salon",
    description: "Professional hair, skin, nail and beauty services with a personal touch.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "DC Ct Rd, near petrol pump, Hill View Colony",
      addressLocality: "Dimapur",
      addressRegion: "Nagaland",
      postalCode: "797112",
      addressCountry: "IN",
    },
    telephone: "089746 20709",
    openingHours: ["Tu-Su 10:00-19:00"],
    priceRange: "₹₹",
  };

  return (
    <html lang="en" className="dark font-body" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0A080A" />
      </head>
      <body className="antialiased min-h-screen bg-[#0A080A] text-foreground font-body">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <MotionProvider>
              <ScrollProgressBar />
              {children}
            </MotionProvider>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
