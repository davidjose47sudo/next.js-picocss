'use client';

import '../styles/global/globals.css'
import { Inter } from 'next/font/google'
import '@picocss/pico'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function themeLight(): boolean {
  return window.matchMedia('(prefers-color-scheme:light)').matches
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html data-theme={themeLight() ? "light" : "dark"} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
