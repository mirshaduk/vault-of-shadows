import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Vault of Shadows",
  description: "A dark documentary archive of humanity's turning points.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cinzel.variable} antialiased bg-[#0d0d0d] text-[#f2f2f2]`}
      >
        {/* Navigation */}
        <nav className="flex justify-between items-center px-8 py-4 border-b border-red-900">
          <Link href="/" className="text-lg font-serif tracking-widest font-['Cinzel']">
            VAULT OF SHADOWS
          </Link>
          <div className="space-x-6 text-sm font-['Inter']">
            <Link href="/seasons" className="hover:text-red-700 transition">
              Seasons
            </Link>
            <Link href="/episodes" className="hover:text-red-700 transition">
              Archive
            </Link>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="text-center text-xs opacity-50 py-6 border-t border-red-900 mt-20 font-['Inter']">
          © 2026 The Vault of Shadows
        </footer>

      </body>
    </html>
  );
}
