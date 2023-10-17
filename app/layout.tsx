/* eslint-disable camelcase */
import React from 'react'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next';

import './globals.css';
import { ThemeProvider } from '@/context/ThemeProvider';
import Head from 'next/head';

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
  }
}
 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <Head>
          <title>hireMeOverflow</title>
          <meta name="description" content="A community-driven platform for asking and answering programming questions." />
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content="hireMeOverflow" />
          <meta property="og:description" content="A community-driven platform for asking and answering programming questions." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="Your Website URL here" />
          <meta property="og:image" content="/building/proj3.png" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="hireMeOverflow" />
          <meta name="twitter:description" content="A community-driven platform for asking and answering programming questions." />
          <meta name="twitter:image" content="/building/proj3.png" />
        </Head>
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
          </ClerkProvider>
        </body>
      </html>
  )
}
