import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Sanjay Marathe',
  description: 'Computer Science & Intelligent Systems student at UC Irvine, passionate about building scalable systems and intelligent agents.',
  generator: 'v0.app',
  keywords: ['Sanjay Marathe', 'Full-Stack Engineer', 'AI', 'Machine Learning', 'UC Irvine', 'Software Engineer'],
  authors: [{ name: 'Sanjay Marathe' }],
  openGraph: {
    title: 'Sanjay Marathe | Full-Stack Engineer & AI Enthusiast',
    description: 'Computer Science & Intelligent Systems student at UC Irvine, passionate about building scalable systems and intelligent agents.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
