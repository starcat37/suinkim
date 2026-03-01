import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suin Kim — Software Engineer",
  description:
    "Software Engineer at LG CNS specializing in AI agents, full-stack web development, and technical mentoring.",
  openGraph: {
    title: "Suin Kim — Software Engineer",
    description:
      "Software Engineer at LG CNS specializing in AI agents, full-stack web development, and technical mentoring.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="mx-auto max-w-[720px] px-6 py-12">{children}</div>
      </body>
    </html>
  );
}
