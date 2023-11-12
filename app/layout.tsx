import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://ricsdeol-learn-nexjs-vercel.vercel.app/"),
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
