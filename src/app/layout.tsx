import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "NER Results",
  description: "New England Region Solo Live Scoring and Results",
  icons: [{ rel: "icon", url: "/ner150.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} min-h-screen bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white`}
      >
        <TRPCReactProvider cookies={cookies().toString()}>
          {children}
        </TRPCReactProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
