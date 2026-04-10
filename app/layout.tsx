import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Crimson_Text, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _plusjakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800']
});

const _crimson = Crimson_Text({ 
  subsets: ["latin"],
  variable: '--font-serif',
  weight: ['400', '600']
});

const _jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  weight: ['400', '600']
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
    <html lang="en" className={`${_plusjakarta.variable} ${_crimson.variable} ${_jetbrains.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
