/* eslint-disable camelcase */
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import '../styles/prism.css';
import { ThemeProvider } from '@/context/ThemeProvider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
})
 
export const metadata: Metadata = {
  title: 'hireMeOverflow',
  description: 'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/assets/images/site-logo.svg'
  },
  openGraph: {
    title: 'hireMeOverflow',
    description: 'hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions.',
    url: 'https://hire-me-overflow.vercel.app/',
    siteName: 'hireMeOverflow',
    images: [
      {
        url: 'https://hire-me-overflow.vercel.app/assets/images/meta.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://hire-me-overflow.vercel.app/assets/images/meta.png',
        width: 1800,
        height: 1600,
        alt: 'hireMeOverflow Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  itunes: {
    appId: 'evanj.betley@gmail.com',
  },
  appleWebApp: {
    title: 'hireMeOverflow',
    statusBarStyle: 'black-translucent',
    startupImage: [
      'https://hire-me-overflow.vercel.app/assets/images/meta.png',
      {
        url: 'https://hire-me-overflow.vercel.app/',
        media: '(device-width: 768px) and (device-height: 1024px)',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "hireMeOverflow",
    description: "hireMeOverflow is a Q&A platform for developers to share knowledge and build their careers. Peer to peer answers for all your coding questions.",
    creator: "@Itsevanb",
    images: [
      {
        url: "https://hire-me-overflow.vercel.app/assets/images/meta.png",
        alt: "hireMeOverflow Logo",
        width: 1200,
        height: 630,
      }
    ],
  },
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          <ClerkProvider
            appearance={{
              elements: {
                formButtonPrimary: 'primary-gradient',
                footerActionLink: 'primary-text-gradient hover:text-primary-500'
              }
            }}
          >
            <ThemeProvider>
              {children}
            </ThemeProvider>
            <Analytics />
          </ClerkProvider>
        </body>
      </html>
  )
}
