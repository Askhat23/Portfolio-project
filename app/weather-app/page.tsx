import Image from 'next/image';

export default function WeatherApp() {
  return (
    <main className="flex bg-cyan-300 text-blue-950">
      <div className="flex items-center max-w-6xl mx-auto gap-10">
        <section className="flex flex-col items-start justify-center max-w-sm px-6 text-justify">
          <h1 className="text-4xl md:text-5xl font-bold mx-auto">
            Weather App
          </h1>
          <p className="text-lg md:text-xl py-10">
            The Weather App is a modern, responsive interface designed to
            deliver accurate forecasts, climate trends, and location‑based
            updates. It emphasizes clarity, accessibility, and mobile‑first
            design, ensuring users can check conditions, track changes, and
            receive alerts seamlessly across devices
          </p>
          <a
            href="https://github.com/Askhat23/weather-app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition mx-auto"
          >
            View Project on GitHub
          </a>
        </section>

        <section className="flex">
          <Image
            src="/weather-forecast-app.png"
            alt="Weather App Screenshot"
            width={400}
            height={100}
            className="h-150 w-170 flex items-center my-8.5 shadow-2xl rounded-2xl"
          />
        </section>
      </div>
    </main>
  );
}
