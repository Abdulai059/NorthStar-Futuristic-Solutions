import Banner from "@/components/banner";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Launchify — PrebuiltUI",
    template: "%s | Launchify",
  },
  description:
    "Launchify is an AI-powered website and product builder that helps startups and creators design, launch and scale faster with smart automation and modern components.",
  keywords: [
    "AI website builder",
    "SaaS landing page",
    "startup website template",
    "AI product builder",
    "no-code platform",
    "Tailwind CSS template",
    "PrebuiltUI",
    "Launchify",
  ],
  authors: [{ name: "PrebuiltUI" }],
  creator: "PrebuiltUI",
  publisher: "PrebuiltUI",

  openGraph: {
    title: "Launchify — Build & Launch Products Faster with AI",
    description:
      "Design, customize and launch modern websites and products using AI-powered tools. Perfect for startups, SaaS founders and creators.",
    url: "https://launchify.prebuiltui.com",
    siteName: "Launchify",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Launchify — Build & Launch Products Faster with AI",
    description:
      "AI-powered platform to build, customize and launch modern products faster.",
    creator: "@prebuiltui",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://launchify.prebuiltui.com",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
