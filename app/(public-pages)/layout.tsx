import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

const metadata: Metadata = {
  title: {
    default:
      "NorthStar Futuristic Solutions | AI Automation for Businesses in Ghana",
    template: "%s | NorthStar Futuristic Solutions",
  },
  description:
    "NFS helps schools, shops, pharmacies and NGOs in Tamale, Ghana automate invoicing, content creation and daily operations using affordable no-code AI tools.",
  keywords: [
    // Local SEO
    "AI consulting Tamale",
    "business automation Tamale Ghana",
    "tech solutions Northern Ghana",
    "digital transformation Tamale",
    "AI services Ghana",
    // Service keywords
    "WhatsApp invoice automation",
    "automated invoicing Ghana",
    "content creation for small businesses",
    "no-code automation Ghana",
    "AI for schools Ghana",
    "pharmacy stock management Ghana",
    "NGO automation tools",
    "social media content Ghana",
    // Brand
    "NorthStar Futuristic Solutions",
    "NFS Ghana",
    "NFS Tamale",
  ],
  authors: [
    { name: "NorthStar Futuristic Solutions", url: "https://northstarfs.com" },
  ],
  creator: "NorthStar Futuristic Solutions",
  publisher: "NorthStar Futuristic Solutions",
  category: "Technology",

  openGraph: {
    title:
      "NorthStar Futuristic Solutions | AI Automation for Businesses in Ghana",
    description:
      "Practical AI systems built for schools, shops, pharmacies and NGOs in Northern Ghana. Automate invoicing, content, and daily ops — no tech skills needed.",
    url: "https://northstarfs.com",
    siteName: "NorthStar Futuristic Solutions",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "https://northstarfs.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "NorthStar Futuristic Solutions — AI for Local Businesses in Ghana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "NorthStar Futuristic Solutions | AI Automation for Businesses in Ghana",
    description:
      "Affordable AI tools that help schools, shops, and NGOs in Tamale automate work and grow faster.",
    creator: "@northstarfs",
    images: ["https://northstarfs.com/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://northstarfs.com",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "your-google-site-verification-token",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Banner /> */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
