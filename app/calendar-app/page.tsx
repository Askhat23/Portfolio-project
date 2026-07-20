import Image from 'next/image';

export default function Calendar() {
  return (
    <main className="bg-linear-to-r from-neutral-800 to-blue-900 text-white">
      <div className="max-w-4xl mx-auto py-5 px-5">
        <h1 className="text-3xl font-bold mb-5 text-center">📅 Calendar App</h1>

        <p className="mb-5 text-center">
          A responsive calendar application built with React. It allows users to
          view, add, and manage events seamlessly with an intuitive UI.
        </p>

        <section className="mb-5">
          <h2 className="text-xl font-semibold mb-6">✨ Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Interactive month and week views</li>
            <li>Event creation, editing, and deletion</li>
            <li>Responsive design for mobile and desktop</li>
            <li>Integration with external APIs (optional)</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-3">📸 Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Image
              src="/calendar-app1.png"
              alt="Calendar App Screenshot 1"
              width={300}
              height={100}
              className="rounded-xl shadow-md"
            />
            <Image
              src="/calendar-app2.png"
              alt="Calendar App Screenshot 2"
              width={300}
              height={100}
              className="rounded-xl shadow-md"
            />
            <Image
              src="/calendar-app3.png"
              alt="Calendar App Screenshot 3"
              width={103}
              height={200}
              className="rounded-xl shadow-md"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">🔗 Explore</h2>
          <div className="space-x-4">
            <a
              href="https://github.com/askhat23/calendar-app2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Source Code
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
