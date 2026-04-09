import { useEffect, useState, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaBehance,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
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

  const contacts = [
    {
      name: "Email",
      icon: <HiOutlineMail size={20} />,
      href: "http://creativek554@gmail.com/",
      subtitle: "creative554@email.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/ugbotufavour",
      subtitle: "Connect professionally",
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      href: "https://github.com/crypticwebber",
      subtitle: "Explore my code",
    },
    {
      name: "Behance",
      icon: <FaBehance size={20} />,
      href: "https://www.behance.net/k_creative",
      subtitle: "View design work",
    },
    {
      name: "Instagram",
      icon: <FaInstagram size={20} />,
      href: "https://www.instagram.com/kreative.dev",
      subtitle: "Design & updates",
    },
    {
      name: "TikTok",
      icon: <FaTiktok size={20} />,
      href: "https://www.tiktok.com/@kreative.dev",
      subtitle: "Creative content",
    },
  ];

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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center gap-10">
        {/* CTA */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-xs text-neutral-500 uppercase tracking-[0.3em]">
            Contact
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mt-4">
            Let's build something
            <br />
            <span className="text-neutral-400">meaningful together</span>
          </h2>

          <p className="mt-6 text-lg text-neutral-500 max-w-2xl leading-relaxed">
            I'm always open to collaborating on innovative digital products,
            brand identity systems, and modern web experiences. If you have an
            idea, project, or opportunity in mind, feel free to reach out.
          </p>
        </div>

        {/* Contact links */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full max-w-2xl transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-neutral-700 rounded-lg px-6 py-4 hover:border-white transition"
            >
              {contact.icon}
              <div className="text-left">
                {contact.name}
                <p className="text-sm text-neutral-500">{contact.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
