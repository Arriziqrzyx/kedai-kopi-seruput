export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/25 backdrop-blur-md z-50">
      <div className="flex items-center justify-between px-6 sm:px-12 lg:px-32 py-4">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          KEDAI <span className="text-yellow-500">SERUPUT</span>
        </div>

        {/* Navigasi */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#product"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Product
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-500 transition duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
