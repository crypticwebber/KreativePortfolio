import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.max(0.85, 1 - scrollY / 1000);
      setScale(newScale);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 overflow-hidden">
      {/* Animated Grid */}
      <div className="grid-bg absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Mouse Glow */}
      <div
        className="absolute w-150 h-150 rounded-full blur-[160px] bg-white/10 pointer-events-none transition-transform duration-300"
        style={{
          left: mouse.x - 300,
          top: mouse.y - 300,
        }}
      />

      {/* Background radial fade */}
      <div className="radial-bg absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

      {/* Content */}
      <div
        className="relative z-10  text-center transition-transform duration-300"
        style={{ transform: `scale(${scale})` }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-[4rem] font-semibold leading-[1.05] tracking-tight animate-fadeUp delay-100 -mt-18">
          Designing and building
          <br />
          <span className="text-gray-300">exceptional digital products</span>
        </h1>

        <p className="mt-8 text-lg text-neutral-500 max-w-xl mx-auto leading-relaxed animate-fadeUp delay-200">
          I help startups and companies build high-performance web applications,
          refined interfaces, and scalable digital systems.
        </p>

        <div className="mt-10 flex justify-center gap-4 animate-fadeUp delay-300">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-white text-black text-sm rounded-md font-medium hover:opacity-90 transition transform hover:-translate-y-1"
          >
            View CV
          </a>

          <a
            href="/Resume.pdf"
            download="Resume.pdf"
            className="px-8 py-3 border border-neutral-700 text-sm rounded-md hover:bg-neutral-900 transition transform hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`

        .animate-fadeUp {
          animation: fadeUp 0.9s ease forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        .delay-100 { animation-delay: .1s }
        .delay-200 { animation-delay: .2s }
        .delay-300 { animation-delay: .3s }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .grid-bg {
          animation: gridMove 30s linear infinite;
        }

        @keyframes gridMove {
          from { transform: translateY(0px); }
          to { transform: translateY(60px); }
        }

        .radial-bg {
          animation: pulseRadial 6s ease-in-out infinite;
        }

        @keyframes pulseRadial {
          0%,100% {
            opacity: .6;
            transform: scale(1);
          }
          50% {
            opacity: .9;
            transform: scale(1.05);
          }
        }

      `}</style>
    </section>
  );
}
