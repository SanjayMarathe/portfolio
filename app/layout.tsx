import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const title = 'Sanjay Marathe | Software Engineering & AI'
const description = 'Sanjay Marathe is a Computer Science and Intelligent Systems student at UC Irvine building AI agents, web products, and immersive applications.'
const siteUrl = 'https://www.sanjaymarathe.me/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: siteUrl },
  authors: [{ name: 'Sanjay Marathe', url: 'https://www.sanjaymarathe.me' }],
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    siteName: 'Sanjay Marathe',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title, description, creator: '@itsmesmarathe' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Analytics /></body></html>
}
