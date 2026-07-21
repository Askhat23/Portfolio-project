'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white text-base sm:text-xl py-4 px-10 flex justify-between items-center">
      {/* Branding */}
      <div className="flex items-center gap-5">
        <h1 className="text-xl sm:text-3xl font-bold text-green-700">
          Askhat Jussupov
        </h1>
        <i className="bx bx-sun text-xl sm:text-2xl md:text-3xl text-gray-200 ml-2 sm:ml-4 cursor-pointer"></i>
      </div>

      {/* Navigation */}
      <nav className="space-x-6">
        <Link
          href="/"
          className="text-blue-500 group relative"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-full h-px bg-blue-600 transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300"></span>
        </Link>
        <Link
          href="/services"
          className="group relative"
        >
          Services
          <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300"></span>
        </Link>
        <Link
          href="/contact"
          className="group relative"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right transition duration-300"></span>
        </Link>
      </nav>
    </header>
  );
}
