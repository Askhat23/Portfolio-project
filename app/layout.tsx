import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Askhat’s Portfolio',
  description:
    'A showcase of my web development projects built with React, Next.js, and modern UI/UX practices.',
  keywords: ['Askhat', 'Portfolio', 'React', 'Next.js', 'Web Development'],
  authors: [{ name: 'Askhat' }],
  openGraph: {
    title: 'Askhat’s Portfolio',
    description: 'Explore my projects and freelance work.',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Askhat’s Portfolio',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Askhat Portfolio Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scrollbar-none`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
