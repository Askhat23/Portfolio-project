import Image from 'next/image';

export default function TaskDashboard() {
  return (
    <main className="bg-linear-to-r from-neutral-950 via-neutral-700 to-neutral-200">
      <div className="flex flex-col items-center p-4 max-w-6xl mx-auto">
        <h1 className="text-center py-2 text-4xl font-bold shadow-md bg-linear-to-b from-neutral-950 via-neutral-700 to-neutral-50 bg-clip-text text-transparent">
          Task Management Dashboard
        </h1>
        <p className="my-4 text-2xl font-bold text-center bg-linear-to-l from-neutral-950 via-neutral-800 to-neutral-100 bg-clip-text text-transparent">
          The application is designed to help users efficiently manage and track
          tasks through an intuitive and interactive interface
        </p>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5 text-center text-neutral-200">
          <div className="p-3 bg-blue-500 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Kanban Workflow</h2>
            <p className="mt-2 text-neutral-300 font-semibold">
              Organize tasks visually across boards with intuitive drag‑and‑drop
              between lists.
            </p>
          </div>
          <div className="p-3 bg-orange-500 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Local Persistence</h2>
            <p className="mt-2 text-neutral-300 font-semibold">
              Your tasks are saved in localStorage, ensuring they remain after
              reloads.
            </p>
          </div>
          <div className="p-3 bg-green-600 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              Responsive Design & Themes
            </h2>
            <p className="mt-2 text-neutral-300 font-semibold">
              Works seamlessly on desktop and mobile, with light and dark theme
              support for a personalized experience.
            </p>
          </div>
        </section>

        <section className="flex items-center justify-center gap-10 my-5">
          <Image
            src="/task-manager1.jpeg"
            alt="Task Manager Screenshot 1"
            width={418}
            height={200}
            className="rounded-xl shadow-md"
          />

          <Image
            src="/task-manager2.jpeg"
            alt="Task Manager Screenshot 2"
            width={418}
            height={100}
            className="rounded-xl shadow-md"
          />
        </section>
      </div>
    </main>
  );
}
