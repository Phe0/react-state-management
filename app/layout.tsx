import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Rendering",
  description: "Simple examples of how React Rendering works!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-5">
          <ul>
            <li>
              <Link href="/" className="text-xl text-white font-bold font-mono">
                /examples
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
