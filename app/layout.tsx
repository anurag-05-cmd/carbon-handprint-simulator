import type { Metadata } from 'next'
import { Poppins, Merriweather, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _poppins = Poppins({ 
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700']
});

const _merriweather = Merriweather({ 
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['300', '400', '700']
});

const _jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Carbon Handprint Simulator | UN SDG 13',
  description: 'Track your positive environmental impact through sustainable actions',
  generator: 'v0.app',
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
    <html lang="en" className={`${_poppins.variable} ${_merriweather.variable} ${_jetbrains.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
