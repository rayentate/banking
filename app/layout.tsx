import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--front-inter'});
const ibmPelxSerif = IBM_Plex_Serif({
subsets: ['latin'],
weight: ['400', '700'],
variable: '--front-ibem-plex-serif'
})
export const metadata: Metadata = {
  title: "SPACE",
  description: "SPACE is the new platform can use by anyone",
icons: {
  icon: '/icons/logo.svg'
}

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={'${inter.variable} ${ibmPlexfSerif.variable}'}>{children}</body>
    </html>
  );
}
