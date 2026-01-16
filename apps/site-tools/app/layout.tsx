import "./globals.css";
import React from "react";

export const metadata = {
  title: "Car Cost Calculators - Free Financial Tools",
  description: "Calculate car ownership costs, compare vehicles, and make smarter financial decisions with our free tools."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/80 backdrop-blur-lg">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-bold text-lg group">
              <span className="w-8 h-8 rounded-xl bg-linear-to-br from-orange-500 to-rose-500 flex items-center justify-center text-white text-sm shadow-lg shadow-orange-500/25 group-hover:scale-110 transition-transform">
                🚗
              </span>
              <span className="bg-linear-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                Car Calculator
              </span>
            </a>
            <nav className="flex items-center gap-1">
              <a 
                href="/tools" 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
              >
                Tools
              </a>
              <a 
                href="/blog" 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
              >
                Guides
              </a>
              <a 
                href="/about" 
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl transition-colors"
              >
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="mt-20 border-t border-orange-100 bg-linear-to-b from-white to-orange-50/30">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-4">
              {/* Brand */}
              <div className="md:col-span-2">
                <a href="/" className="flex items-center gap-2 font-bold text-lg mb-4">
                  <span className="w-8 h-8 rounded-xl bg-linear-to-br from-orange-500 to-rose-500 flex items-center justify-center text-white text-sm">
                    🚗
                  </span>
                  <span>Car Calculator</span>
                </a>
                <p className="text-gray-500 text-sm max-w-xs">
                  Free car cost calculators to help you make smarter vehicle decisions. No sign-up required.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Calculators</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/tools" className="text-gray-500 hover:text-orange-600 transition-colors">All Tools</a></li>
                  <li><a href="/blog" className="text-gray-500 hover:text-orange-600 transition-colors">Guides</a></li>
                  <li><a href="/about" className="text-gray-500 hover:text-orange-600 transition-colors">About</a></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy" className="text-gray-500 hover:text-orange-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms" className="text-gray-500 hover:text-orange-600 transition-colors">Terms of Service</a></li>
                  <li><a href="/contact" className="text-gray-500 hover:text-orange-600 transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-orange-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Car Calculator. All rights reserved.
              </p>
              <p className="text-sm text-gray-400">
                🚀 Built for smarter car decisions
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}