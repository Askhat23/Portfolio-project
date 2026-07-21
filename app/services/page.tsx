export default function Services() {
  return (
    <main>
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
    </main>
  );
}
