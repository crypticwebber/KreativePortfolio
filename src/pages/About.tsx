import { useEffect, useState, useRef } from "react";

export default function About() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-black text-white px-6 overflow-hidden"
    >
      {/* Mouse Glow */}
      <div
        className="absolute w-100 h-100 rounded-full blur-[120px] bg-white/10 pointer-events-none transition-transform duration-300"
        style={{
          left: mouse.x - 200,
          top: mouse.y - 200,
        }}
      />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[80px_80px]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-8">
        <p
          className={`text-xs text-neutral-500 mt-10 uppercase tracking-[0.3em] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          About Me
        </p>

        <h2
          className={`text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Crafting digital solutions
          <br />
          <span className="text-neutral-400">with precision and style</span>
        </h2>

        <p
          className={`mt-6 text-lg text-neutral-500 max-w-2xl leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          I am a product engineer passionate about building high-performance web
          applications and polished user experiences. I transform complex ideas
          into structured, scalable digital systems that delight users and drive
          results.
        </p>

        {/* Skills */}
        <div
          className={`mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {[
            "Web Applications",
            "UI/UX Design",
            "Performance Optimization",
            "Scalable Systems",
            "Frontend & Backend",
            "Team Collaboration",
          ].map((skill, i) => (
            <div
              key={i}
              className="border border-neutral-700 rounded-lg px-4 py-2 text-sm text-neutral-300 hover:border-white hover:text-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
