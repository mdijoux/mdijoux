import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";

import '../styles/globals.css';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="fr">
            <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
  }