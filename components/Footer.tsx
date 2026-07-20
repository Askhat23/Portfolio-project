export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-2 px-6 text-center">
      <p>© {new Date().getFullYear()} Portfolio of Askhat Jussupov</p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/askhat23"
          target="_blank"
          className="hover:text-blue-700"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/askhat-jussupov-088a599b/"
          target="_blank"
          className="hover:text-blue-700"
        >
          LinkedIn
        </a>
        <a
          href="mailto:acxatjussupov@gmail.com"
          className="hover:text-blue-700"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
