import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MediLink - Engineering the Future",
  description: "Digitize Hospital Devices. Empower Better Care. | Epidemiological Insights | AI-Powered Predictive Maintenance | Real-Time Dashboards ",
    keywords: [
    "vortan",
    "IoT",
    "healthcare",
    "MediLink",
    "medical devices",
    "AI",
    "predictive maintenance",
    "AI-powered",
    "industrial IoT",
    "communication solutions",
    "embedded systems",
    "Vortan",
    "LoRa",
    "cloud dashboard",
    "vortan africa",
    "Vortan IO",
    "Tanzania IOT",
    "LORA",
    "Medical Equipment",
    "Epidemiological Insights",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
              <Toaster />
        {children}
      </body>
    </html>
  );
}
