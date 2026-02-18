import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Management Concepts",
  description: "Website Management Concepts Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <header className="app-header">
            <h1>Website Management Concepts</h1>
          </header>
          <div className="content-wrapper">
            <nav className="side-nav">
              <ul>
                <li>
                  <Link href="/websites">Websites</Link>
                </li>
              </ul>
            </nav>
            <main className="main-content">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
