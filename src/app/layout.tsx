import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "vixen.sh",
  description: "Created by antleredvixen",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold bg-[#ff00ff] text-white">
      <div>vixen.sh</div>

      <div>sign in</div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} flex flex-col gap-4`}>
      <body className="w-full">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
