import "~/styles/globals.css";

import { Inter, Manrope } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { cx } from "~/utils";
import Header from "./_components/header";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrop = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrop.variable, "font-mr bg-light")}>
        <TRPCReactProvider>
          <Header/>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}