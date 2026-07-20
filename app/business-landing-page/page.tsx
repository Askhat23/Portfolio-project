import Image from 'next/image';

export default function LuxeHairStudio() {
  return (
    <main className="flex bg-linear-to-r from-pink-900 to-purple-900 text-white">
      <div className="flex items-center max-w-5xl mx-auto py-5 px-5 gap-10">
        <div className="w-80">
          <h1 className="text-4xl text-center font-bold mb-10 after:block after:w-full after:h-px after:bg-gray-300 after:mt-4">
            Luxe Hair Studio Landing Page
          </h1>

          <p className="mb-10 text-lg text-justify after:block after:w-full after:h-px after:bg-gray-300 after:mt-4">
            The Luxe Hair Studio Landing Page is a modern, responsive web
            interface designed to showcase a salon’s services, pricing, and
            brand identity. It emphasizes visual elegance, user accessibility,
            and mobile‑first design, ensuring clients can explore offerings
            seamlessly across devices.
          </p>

          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-3">🔗 Explore</h2>
            <div className="space-x-4">
              <a
                href="https://github.com/askhat23/luxe-hair-studio232"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-600 hover:underline"
              >
                View Source Code
              </a>
            </div>
          </section>
        </div>

        <section className="grid grid-cols-2 justify-items-center gap-3">
          <Image
            src="/hair-studio-tablet.png"
            alt="tablet view"
            width={300}
            height={100}
            className="justify-center rounded-xl h-90 w-65"
          />
          <Image
            src="/hair-studio-mobile1.png"
            alt="mobile view 1"
            width={150}
            height={200}
            className="rounded-xl h-90 w-50 justify-self-end"
          />
          <Image
            src="/hair-studio-landscape.png"
            alt="landscape view"
            width={400}
            height={100}
            className="rounded-xl h-65 w-[85%] col-span-2"
          />
        </section>
      </div>
    </main>
  );
}
