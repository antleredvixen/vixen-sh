import { ClerkProvider } from '@clerk/nextjs'
import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TopNav } from "~/app/_components/topnav";

export const metadata: Metadata = {
  title: "vixen.sh",
  description: "Created by antleredvixen",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
        <body className="w-full">
          <TopNav />
          {children}
          <footer className="text-center mt-auto py-2 bg-[#ffccff] text-[#ff00ff]">
            <p>&copy; 2024 antleredvixen. All rights reserved.</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
