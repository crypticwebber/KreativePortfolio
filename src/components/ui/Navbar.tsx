import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-md bg-transparent ">
      <div className="max-w-8xl mx-auto px-6 md:px-25 py-5">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight text-white hover:opacity-80 transition"
          >
            <img src="/logo.png" alt="" className="h-5 w-auto" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-sm text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-white transition ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-6 flex flex-col gap-6 text-sm text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
