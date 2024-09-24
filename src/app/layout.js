// app/layout.js or layout.js (depending on your Next.js version)
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mo Mchawrab',
  description: 'My portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo-fac.png" sizes="512x512"/>
        {/* Add other meta tags here if needed */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}