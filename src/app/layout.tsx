import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "CAMPAIGN COMPASS — Political Intelligence",
  description: "Track candidate stances, policy updates, and civic changes with source-backed intelligence.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><div className="grain" />{children}</body></html>);
}
