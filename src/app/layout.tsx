import type { Metadata } from "next";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Chat app",
  description: "Chat app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  // keywords: "chat app,chat application,chat,chat app,chat application,chat",
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
