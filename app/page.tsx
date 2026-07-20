import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-linear-to-b from-neutral-800 to-blue-900">
      <section
        aria-label="Intro section"
        className="flex justify-between px-20 py-12"
      >
        <div className="w-1/2 flex flex-col items-center text-white text-center">
          <h1 className="text-3xl font-bold">Welcome to My Portfolio !</h1>
          <p className="mt-4 text-2xl font-semibold text-yellow-400">Hello,</p>
          <p className="text-2xl font-bold">I Am Askhat.</p>
          <p className="text-xl text-green-700">React/Next.js developer.</p>
          <p className="w-1/2">
            I am passionate about building responsive, accessible, and modern
            web applications.
          </p>
          <div className="mt-15 py-3 px-3 shadow-xl bg-neutral-900/50 rounded-xl">
            <h2 className="text-2xl font-bold mb-5">👋 About Me</h2>
            <p className="mt-4">
              I enjoy crafting clean, maintainable code and polished UI/UX
              experiences. My focus is on creating reusable components, aligning
              design with brand identity, and ensuring accessibility for all
              users.
            </p>
            <p className="mt-4">
              Beyond coding, I’m interested in open‑source contribution,
              portfolio presentation, and refining my skills through real‑world
              projects.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <Image
            alt="Askhat"
            src="/Askhat.png"
            width={400}
            height={200}
            className="rounded-xl mx-auto"
          />
        </div>
      </section>

      <section
        id="about"
        aria-label="About me highlights"
        className="px-20 py-5 grid grid-cols-1 md:grid-cols-3 gap-8 text-white"
      >
        {/* Experience Card */}
        <div className="bg-green-800 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">💼 Experience</h3>
          <p className="text-lg">2+ years building React/Next.js apps</p>
        </div>

        {/* Projects Card */}
        <div className="bg-blue-800 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">📂 Projects</h3>
          <p className="text-lg">10+ completed portfolio projects</p>
        </div>

        {/* Skills Card */}
        <div className="bg-yellow-700 rounded-lg shadow-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">⚡ Skills</h3>
          <p className="text-lg">React, Next.js, Tailwind, Git</p>
        </div>
      </section>

      <section className="px-5 py-5 text-white bg-neutral-700/40 shadow-xl">
        <h2 className="text-2xl font-semibold text-center">
          Featured Projects
        </h2>
        <ul className="flex items-center justify-center text-center gap-3 text-sm py-5">
          <li>
            <Link
              href="/calendar-app"
              className="hover:underline hover:text-blue-700"
            >
              📅 Calendar App
              <br />
              responsive event handling
            </Link>
            <Image
              alt="Calendar App"
              src="/calendar-react-app.png"
              width={250}
              height={200}
              className="rounded-xl mt-2"
            />
          </li>
          <li>
            <Link
              href="/business-landing-page"
              className="hover:underline hover:text-blue-700"
            >
              💼 Business Landing Page
              <br />
              Figma to React conversion
            </Link>
            <Image
              alt="Luxe Hair Studio"
              src="/hair-studio.png"
              width={300}
              height={200}
              className="rounded-xl mt-2"
            />
          </li>
          <li>
            <Link
              href="/task-dashboard"
              className="hover:underline hover:text-blue-700"
            >
              📝 Task Management Dashboard
              <br />
              modular UI components
            </Link>
            <Image
              alt="Task Manager"
              src="/task-management.png"
              width={300}
              height={200}
              className="rounded-xl mt-2"
            />
          </li>
          <li>
            <Link
              href="/analytics-dashboard"
              className="hover:underline hover:text-blue-700"
            >
              📊 Analytics Dashboard
              <br />
              data visualization & insights
            </Link>
            <Image
              alt="Analytics Dashboard"
              src="/analytics-board.png"
              width={300}
              height={200}
              className="rounded-xl mt-2"
            />
          </li>
          <li>
            <Link
              href="/weather-app"
              className="hover:underline hover:text-blue-700"
            >
              ☀️ Weather App
              <br />
              real-time forecasts
            </Link>
            <Image
              alt="Weather App"
              src="/weather-forecast-app.png"
              width={250}
              height={200}
              className="rounded-xl mt-2"
            />
          </li>
        </ul>
      </section>
    </main>
  );
}
