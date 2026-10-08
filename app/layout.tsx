import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profile } from "@/content/profile";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} - ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description: `${profile.name} is a ${profile.title} specializing in full-stack web development, AI integrations, and automation systems. Currently at Particle Execution, building enterprise AI agent platforms.`,
  keywords: [
    "Full Stack Developer",
    "Lead Developer",
    "Next.js Developer",
    "TypeScript",
    "React Developer",
    "Node.js",
    "FastAPI",
    "AI Engineer",
    "OpenAI API",
    "RAG",
    "AI Agents",
    "Multi-channel messaging",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Automation",
    "n8n",
    "Kerala",
    "India",
    "Remote Developer",
    "Muhamed Fulail KT",
    "Fulail KT",
  ],
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: profile.siteUrl,
    siteName: `${profile.name} - Portfolio`,
    title: `${profile.name} - ${profile.title}`,
    description: `Lead Full Stack Developer building scalable web products and AI-powered systems. Specializing in Next.js, TypeScript, Node.js, and AI integrations.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} - ${profile.title}`,
    description: `Lead Full Stack Developer building scalable web products and AI-powered systems.`,
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
    canonical: profile.siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.siteUrl,
  email: profile.email,
  jobTitle: profile.title,
  sameAs: [profile.github, profile.linkedin],
  knowsAbout: [
    "Full Stack Development",
    "Next.js",
    "TypeScript",
    "Node.js",
    "React",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "AI Agents",
    "OpenAI API",
    "Automation",
    "GTM Engineering",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Particle Execution",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-ink antialiased font-sans">{children}</body>
    </html>
  );
}
