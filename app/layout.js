import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Primary font used in your pages via font-poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  // Update this to your deployed domain (e.g. https://hassansaleem.com or Vercel URL)
  metadataBase: new URL("https://hassansaleem.vercel.app"),
  title: {
    default: "Hassan Saleem | Video Editing & Visual Storytelling",
    template: "%s | Hassan Saleem",
  },
  description:
    "Explore the professional portfolio of Hassan Saleem—expert video editor, videographer, content creator, and social media manager.",
  keywords: [
    "Hassan Saleem",
    "Video Editing",
    "Videography",
    "Social Media Management",
    "Content Creation",
    "Portfolio",
  ],
  authors: [{ name: "Hassan Saleem" }],
  creator: "Hassan Saleem",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hassansaleem.vercel.app",
    siteName: "Hassan Saleem Portfolio",
    title: "Hassan Saleem | Video Editor & Visual Storyteller",
    description:
      "Bringing brands to life through professional video editing, videography, and social media management.",
    images: [
      {
        url: "/hassan.jpg",
        width: 1200,
        height: 630,
        alt: "Hassan Saleem Portfolio Header",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Saleem | Video Editing & Visual Storytelling",
    description:
      "Bringing brands to life through professional video editing, videography, and social media management.",
    images: ["/hassan.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hassan Saleem",
    jobTitle: "Video Editor & Videographer",
    url: "https://hassansaleem.vercel.app",
    image: "https://hassansaleem.vercel.app/hassan.jpg",
    sameAs: [
      "https://www.tiktok.com/@viral.vloger",
      "https://www.youtube.com/@MiniVlogs3331",
      "https://www.instagram.com/minivlogs3811/",
    ],
    knowsAbout: [
      "Video Editing",
      "Videography",
      "Social Media Management",
      "Content Creation",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}