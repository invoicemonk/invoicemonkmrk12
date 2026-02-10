import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers/Providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://invoicemonk.com"),
  title: {
    default: "InvoiceMonk - Invoicing, Expenses & Accounting Software for Small Businesses",
    template: "%s | InvoiceMonk",
  },
  description:
    "Professional invoicing, expense tracking, and accounting software designed for freelancers, consultants, and small businesses. Get paid faster with InvoiceMonk.",
  keywords: [
    "invoicing software",
    "expense tracking",
    "accounting software",
    "small business",
    "freelancer tools",
    "invoice generator",
    "financial management",
  ],
  authors: [{ name: "InvoiceMonk" }],
  creator: "InvoiceMonk",
  publisher: "InvoiceMonk",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://invoicemonk.com",
    title: "InvoiceMonk - Invoicing, Expenses & Accounting Software",
    description:
      "Professional invoicing, expense tracking, and accounting software designed for freelancers, consultants, and small businesses.",
    siteName: "InvoiceMonk",
  },
  twitter: {
    card: "summary_large_image",
    title: "InvoiceMonk - Invoicing, Expenses & Accounting Software",
    description:
      "Professional invoicing, expense tracking, and accounting software designed for freelancers, consultants, and small businesses.",
    creator: "@invoicemonk",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
