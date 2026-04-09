import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Ad-Swift",
      description:
        "A high-performance ad management platform designed to streamline campaigns and track analytics effortlessly.",
      image:
        "https://img.freepik.com/free-photo/3d-render-network-communications-science-background-with-low-poly-plexus-design_1048-13265.jpg",
      stack: ["Next.js", "Tailwind", "Vercel"],
      live: "https://ad-swift.vercel.app/",
      github: "https://github.com/crypticwebber/AdSwift",
    },
    {
      title: "Cofinity",
      description:
        "A modern financial services platform offering seamless payments, transfers, and digital banking solutions.",
      image: "/dashboard.png",
      stack: ["Next.js", "TypeScript", "React"],
      live: "https://www.cofinity.ng/",
      github: "https://github.com/crypticwebber",
    },
    {
      title: "Food Haven",
      description:
        "A deliciously intuitive food delivery platform connecting users with local restaurants quickly and efficiently.",
      image:
        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?t=st=1754319075~exp=1754322675~hmac=5d9e7916bbdcf5666fe2b8501ed3a6c28b3dd0695577fc63f1378cd80cbc6ead&w=826",
      stack: ["Next.js", "Tailwind", "Supabase"],
      live: "https://food-h.vercel.app/",
      github: "https://github.com/crypticwebber/foodH",
    },

    // Design Projects (Behance)
    {
      title: "Kreative Brand Identity",
      description:
        "Brand identity design showcasing creative and modern branding concepts.",
      image: "/KREATIVE1.jpg",
      live: "https://www.behance.net/gallery/246895337/Kreative-Brand-Identity-Design",
      type: "Design",
    },
    {
      title: "Cofinity NG Branding",
      description:
        "A cohesive digital branding and identity project for Cofinity NG.",
      image: "/cofinity.jpg",
      live: "https://www.behance.net/gallery/243643127/Cofinity-NG-Branding-Digital-Design",
      type: "Design",
    },
    {
      title: "Ember Brand Identity",
      description:
        "Modern brand identity project for Ember showcasing visual design consistency.",
      image: "/EMBER4.jpg",
      live: "https://www.behance.net/gallery/247115007/Ember-Brand-Identity",
      type: "Design",
    },
  ];

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="group relative border border-neutral-800 rounded-xl overflow-hidden bg-neutral-900/40 backdrop-blur hover:border-gray-600 transition duration-300 ">
      {/* Project Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <p className="text-neutral-500 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs border border-neutral-700 px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
        {/* Buttons */}
        <div className="flex gap-4 mt-4">
          {project.type === "Design" ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-4 py-2 bg-white text-black rounded-md hover:opacity-90 transition transform hover:-translate-y-1"
            >
              View
            </a>
          ) : (
            <>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 bg-white text-black rounded-md hover:opacity-90 transition"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-4 py-2 border border-neutral-700 rounded-md hover:border-white transition"
              >
                Code
              </a>
            </>
          )}
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
    </div>
  );

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
      className="relative min-h-screen bg-black text-white px-6 md:px-18 lg:px-25 py-32  overflow-hidden"
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

      <div
        className={`relative z-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-xs text-neutral-500 uppercase tracking-[0.3em]">
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold mt-6 max-w-3xl">
          Selected work and
          <span className="text-neutral-400"> digital products</span>
        </h2>

        {/* Web Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {projects
            .filter((p) => !p.type)
            .map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
        </div>

        {/* Design Projects */}
        <h3 className="mt-10 text-2xl font-semibold mb-6">
          {/* Design Projects (Behance) */}
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects
            .filter((p) => p.type === "Design")
            .map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
        </div>
      </div>
    </section>
  );
}
