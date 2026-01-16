import "./globals.css";
import React from "react";

export const metadata = {
  title: "Tools & Calculators - Free Online Utilities",
  description: "Fast, simple, free tools and calculators for budgeting, savings, and daily decisions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-lg">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-lg group">
              <span className="w-8 h-8 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm shadow-lg shadow-violet-500/25 group-hover:scale-110 transition-transform">
                ⚡
              </span>
              <span className="bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Tools & Calculators
              </span>
            </a>
            <nav className="flex items-center gap-1">
              <a 
                href="/tools" 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              >
                Tools
              </a>
              <a 
                href="/blog" 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              >
                Blog
              </a>
              <a 
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors"
              >
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-gray-200 bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand */}
              <div className="md:col-span-2">
                <a href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                  <span className="w-8 h-8 rounded-xl bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-sm">
                    ⚡
                  </span>
                  <span>Tools & Calculators</span>
                </a>
                <p className="text-gray-500 text-sm max-w-xs">
                  Free online tools for everyday calculations. Simple, fast, and privacy-friendly.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/tools" className="text-gray-500 hover:text-gray-900 transition-colors">All Tools</a></li>
                  <li><a href="/blog" className="text-gray-500 hover:text-gray-900 transition-colors">Blog</a></li>
                  <li><a href="/about" className="text-gray-500 hover:text-gray-900 transition-colors">About</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                  <li><a href="/contact" className="text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Tools & Calculators. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                Made with ❤️ for everyday people
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}