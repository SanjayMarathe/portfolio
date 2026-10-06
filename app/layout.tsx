import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sanjay Marathe',
  description: 'Sanjay Marathe is a Computer Science and Intelligent Systems student at UC Irvine building software and AI products.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>
}
