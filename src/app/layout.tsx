import type { Metadata } from "next";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Enkonix Software Services Private Limited",
  description:
    "Enkonix Software Services Pvt. Ltd is a global software development company providing innovative solutions and services to businesses worldwide.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  authors: [{ name: "Akash" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="[&::-webkit-scrollbar]:hidden  max-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
