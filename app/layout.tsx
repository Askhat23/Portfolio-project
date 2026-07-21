import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'boxicons/css/boxicons.min.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio of Askhat Jussupov',
  description:
    'A showcase of my web development projects built with React, Next.js, and modern UI/UX practices.',
  keywords: [
    'Askhat',
    'Portfolio',
    'React',
    'Next.js',
    'Web Development',
    'Front end',
    'Back end',
    'Full stack',
  ],
  authors: [{ name: 'Askhat' }],
  openGraph: {
    title: 'Portfolio of Askhat Jussupov',
    description: 'Explore my projects and freelance work.',
    url: 'https://your-portfolio-domain.com',
    siteName: 'Portfolio of Askhat Jussupov',
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
      <body className="min-h-screen bg-gray-900">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
