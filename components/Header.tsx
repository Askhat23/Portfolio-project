'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-10 flex justify-between items-center">
      {/* Branding */}
      <h1 className="text-xl font-bold">Portfolio of Askhat Jussupov</h1>

      {/* Navigation */}
      <nav className="space-x-6">
        <Link
          href="/"
          className="hover:text-blue-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-blue-400"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-blue-400"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
