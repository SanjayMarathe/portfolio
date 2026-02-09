import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Sanjay Marathe',
  description: 'Computer Science & Intelligent Systems student at UC Irvine. Building scalable systems, intelligent agents, and high-impact products.',
  keywords: ['Sanjay Marathe', 'Software Engineer', 'AI', 'Machine Learning', 'UC Irvine'],
  authors: [{ name: 'Sanjay Marathe' }],
  openGraph: {
    title: 'Sanjay Marathe',
    description: 'Computer Science & Intelligent Systems student at UC Irvine. Building scalable systems, intelligent agents, and high-impact products.',
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
      <body className={`${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
