'use client';

import React, { useEffect, useState } from 'react';
import { letters, professionTexts } from '@/utils/portfolioData';
import Image from 'next/image';

export default function Home() {
  const [hoveredLetter, setHoveredLetter] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRotating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % professionTexts.length);
        setIsRotating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full h-screen flex flex-col justify-center items-center">
      <section
        aria-label="Intro section"
        className="flex flex-col items-start md:items-center gap-y-3 xl:gap-y-10 mb-0 md:mb-20 xl:mb-0"
      >
        <h1 className="flex flex-col space-y-2 md:space-y-4 xl:space-y-8 text-3xl md:text-4xl xl:text-6xl font-bolder md:font-normal text-yellow-500">
          <span className="flex">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="relative inline-block w-32 md:w-38 -mr-24 xl:-mr-20"
                onMouseEnter={() => {
                  console.log('Hovered:', index);
                  setHoveredLetter(index);
                }}
                onMouseLeave={() => {
                  console.log('Leave:', index);
                  setHoveredLetter(null);
                }}
              >
                {letter.char}
                {hoveredLetter === index && (
                  <Image
                    src={letter.img}
                    alt={`Hover image ${index + 1}`}
                    width={150}
                    height={100}
                    className={`absolute bottom-full rounded -translate-x-1/2 ${letter.rotate}`}
                  />
                )}
              </span>
            ))}
          </span>
          <span className="text-2xl md:text-4xl xl:text-6xl tracking-wider py-2 xl:py-4 overflow-hidden">
            I&apos;m
            <span
              className={`inline-block w-40  md:w-60 xl:w-95 ml-2 lg:ml-6 font-extrabold transform origin-left transition-transform duration-300 ease-out ${isRotating ? 'rotate-100' : 'rotate-0'}`}
            >
              {professionTexts[currentIndex]}
            </span>
            Web Developer
          </span>
        </h1>
      </section>

      {/* <section aria-label="About me" className="mt-15 py-3 px-3 shadow-xl bg-neutral-900/50 rounded-xl">
          </section> */}
    </main>
  );
}
