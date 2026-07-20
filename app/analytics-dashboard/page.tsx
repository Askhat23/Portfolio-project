import Image from 'next/image';

export default function ProjectAnalytics() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl shadow-xl p-3">
        <section className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sales & Visitors Analytics Dashboard
          </h1>
          <p className="text-xl text-gray-600 font-semibold">
            A responsive React + Recharts dashboard that visualizes weekly and
            monthly sales, visitors, and revenue data with interactive charts
            and summary cards.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col items-center text-center justify-center p-15">
            <h2 className="text-xl font-semibold text-neutral-100 mb-2 bg-cyan-700 py-1 px-3 rounded">
              Interactive Charts
            </h2>
            <p className="text-lg text-gray-600">
              Toggle between weekly and monthly views, click bars to update
              summary cards, and explore trends with dynamic chart rendering.
            </p>
          </div>
          <div className="bg-white overflow-hidden">
            <Image
              src="/analytics-board1.png"
              alt="Analytics Dashboard Screenshot 1"
              width={200}
              height={200}
              className="w-full shadow-xl"
            />
          </div>

          <div className="bg-white overflow-hidden">
            <Image
              src="/analytics-board2.png"
              alt="Analytics Dashboard Screenshot 2"
              width={200}
              height={200}
              className="w-full shadow-xl"
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center p-15">
            <h2 className="text-xl font-semibold text-neutral-100 mb-2 bg-cyan-700 py-1 px-3 rounded">
              Responsive UI
            </h2>
            <p className="text-lg text-gray-600">
              Built with Tailwind CSS for polished, accessible layouts that
              adapt seamlessly across devices.
            </p>
          </div>

          <div className="flex flex-col items-center text-center justify-center p-15">
            <h2 className="text-xl font-semibold text-neutral-100 mb-2 bg-cyan-700 py-1 px-3 rounded">
              Data Insights
            </h2>
            <p className="text-lg text-gray-600">
              Clear visualization of business performance trends through
              intuitive charts and summary metrics.
            </p>
          </div>
          <div className="bg-white overflow-hidden">
            <Image
              src="/analytics-board3.png"
              alt="Analytics Dashboard Screenshot 3"
              width={200}
              height={200}
              className="w-full shadow-xl"
            />
          </div>

          <div className="bg-white overflow-hidden">
            <Image
              src="/analytics-board4.png"
              alt="Analytics Dashboard Screenshot 4"
              width={200}
              height={200}
              className="w-full shadow-xl"
            />
          </div>
          <div className="flex flex-col items-center text-center justify-center p-15">
            <h2 className="text-xl font-semibold text-neutral-100 mb-2 bg-cyan-700 py-1 px-3 rounded">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-600">
              React, Recharts, Tailwind CSS, and modular component design for
              maintainability and scalability.
            </p>
          </div>
        </section>

        <section className="text-xl text-center m-3">
          <a
            href="https://github.com/Askhat23/analytics_dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition"
          >
            View Project on GitHub
          </a>
        </section>
      </div>
    </main>
  );
}
