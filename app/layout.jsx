import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://valleyglasslodge.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Valley Glass Lodge | Próxima apertura",
  description:
    "Muy pronto, Valley Glass Lodge abrirá sus puertas. Un refugio de vidrio para bajar el ritmo, respirar profundo y mirar el paisaje de otra manera.",
  applicationName: "Valley Glass Lodge",
  keywords: [
    "Valley Glass Lodge",
    "lodge de vidrio",
    "alojamiento en la naturaleza",
    "escapada de naturaleza",
    "Valley lodge",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Valley Glass Lodge — Próximamente",
    description:
      "Un nuevo refugio entre naturaleza y cielo está tomando forma. Muy pronto abriremos nuestras puertas.",
    url: "/",
    siteName: "Valley Glass Lodge",
    locale: "es_EC",
    type: "website",
    images: [{ url: "/valley-glass-lodge-transparent.png", width: 1158, height: 848, alt: "Logotipo de Valley Glass Lodge" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valley Glass Lodge — Próximamente",
    description: "Un refugio de vidrio en medio de la naturaleza. Muy pronto.",
    images: ["/valley-glass-lodge-transparent.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "128x128" }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#10140f",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
