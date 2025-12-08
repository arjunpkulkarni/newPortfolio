import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const fontSans = localFont({
  src: [
    {
      path: "../fonts/Cal_Sans/CalSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

const fontOutfit = localFont({
  src: [
    {
      path: "../fonts/Outfit/static/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

const fontRadioCanada = localFont({
  src: [
    {
      path: "../fonts/Radio_Canada/RadioCanada-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Radio_Canada/RadioCanada-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-radio-canada",
});

const fontOpenSans = localFont({
  src: [
    {
      path: "../fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
      style: "normal",
    },
    {
      path: "../fonts/Open_Sans/OpenSans-Italic-VariableFont_wdth,wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  icons: {
    icon: DATA.avatarUrl,
  },
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontOutfit.variable,
          fontRadioCanada.variable,
          fontOpenSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <Header />
            {children}
            
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
