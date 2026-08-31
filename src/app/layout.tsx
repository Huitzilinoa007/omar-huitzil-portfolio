import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Omar Alejandro Huitzil Cruz | Data Science & ML Engineer",
  description:
    "Portafolio de Omar Huitzil. Proyectos en Machine Learning, Data Science y Desarrollo de Software.",
  keywords: [
    "Omar Huitzil",
    "Omar Alejandro Huitzil Cruz",
    "Machine Learning Engineer",
    "Data Science",
    "Portafolio",
  ],
  authors: [{ name: "Omar Alejandro Huitzil Cruz" }],
  creator: "Omar Alejandro Huitzil Cruz",
  alternates: {
    canonical: "https://omar-huitzil-portfolio.vercel.app/",
  },
  verification: {
    google: "OK0cfmIAjmq3L2gtmE2lAQxeGCuqQ1jGjY7at8AoeKU",
  },
  openGraph: {
    title: "Omar Alejandro Huitzil Cruz | Data Science & ML Engineer",
    description:
      "Portafolio y proyectos de Machine Learning, Ciencia de Datos y Desarrollo Backend.",
    url: "https://omar-huitzil-portfolio.vercel.app/",
    siteName: "Omar Huitzil Portfolio",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omar Alejandro Huitzil Cruz",
  alternateName: ["Omar Huitzil", "Huitzil"],
  url: "https://omar-huitzil-portfolio.vercel.app",
  jobTitle: "Data Science & Machine Learning Engineer",
  sameAs: [
    "https://github.com/tu-usuario",
    "https://linkedin.com/in/tu-usuario",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
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