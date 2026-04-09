import { useEffect, useState } from "react";

export default function Footer() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <footer className="relative bg-black text-white py-12  px-6 lg:px-18 overflow-hidden">
      {/* Mouse Glow */}
      <div
        className="absolute w-96 h-96 rounded-full blur-[120px] bg-white/5 pointer-events-none transition-transform duration-300"
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
        }}
      />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row mt-10 lg:mt-20 items-center justify-between gap-6">
        {/* Branding / Name */}
        <div className="flex flex-col md:block items-center">
          <img src="/logo.png" alt="" className="h-5 w-auto" />
          <p className="text-sm text-neutral-500 mt-1">
            Crafted with precision & passion
          </p>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-6 text-sm text-neutral-400 justify-center md:justify-end">
          <a href="#hero" className="hover:text-white transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            View CV
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 text-center mt-10 text-xs text-neutral-500">
        &copy; {new Date().getFullYear()} Kreative Portfolio. All rights
        reserved.
      </div>
    </footer>
  );
}
