import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Politics Updates | KHG",
  description: "Track political updates, officials, and policy changes that matter.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body><div className="grain" />{children}</body></html>);
}
