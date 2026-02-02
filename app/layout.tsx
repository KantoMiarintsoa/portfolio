import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kanto Sarobidy - Fullstack Developer Portfolio',
  description:
    'Computer Science student and fullstack developer specializing in web and mobile development with React, Next.js, NestJS, and React Native',
  metadataBase: new URL('https://kantosarobidy.vercel.app'),
  openGraph: {
    title: 'Kanto Sarobidy Ratolojanahary - Fullstack Developer',
    description:
      'Computer Science student and fullstack developer specializing in web and mobile development with React, Next.js, NestJS, and React Native',
    url: 'https://kantosarobidy.vercel.app',
    siteName: 'Kanto Sarobidy Portfolio',
    images: [
      {
        url: '/images/hero-section.png',
        width: 1200,
        height: 630,
        alt: 'Kanto Sarobidy Ratolojanahary - Fullstack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanto Sarobidy Ratolojanahary - Fullstack Developer',
    description:
      'Computer Science student and fullstack developer specializing in web and mobile development with React, Next.js, NestJS, and React Native',
    images: ['/images/hero-section.png'],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
