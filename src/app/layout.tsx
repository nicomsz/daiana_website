import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Daiana Oliveira',
  description: 'Sobrancelhas e cílios - Blumenau, SC',
  icons: '/images/favicon.ico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <title>Dai Oliveira - Sobrancelhas e cílios.</title>
      <meta
        name="description"
        content="Sobrancelhas e cílios em Blumenau - SC, venha conferir!"
      />
      <meta name="robots" content="index,nofollow" />
      <link rel="shortcut icon" href="/images/favicon.png" />
      <meta httpEquiv="imagetoolbar" content="no" />
      <body className={`${inter.className} bg-background-color `}>
        {children}
      </body>
    </html>
  )
}
