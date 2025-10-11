import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data || []))
      .catch(() => setProjects([]));
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projects, index]);

  function prev() {
    setIndex((i) => (i <= 0 ? Math.max(0, projects.length - 1) : i - 1));
  }
  function next() {
    setIndex((i) => (i >= projects.length - 1 ? 0 : i + 1));
  }

  function onTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchMove(e) {
    touchEndX.current = e.touches[0].clientX;
  }
  function onTouchEnd() {
    const dx = touchStartX.current - touchEndX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) next();
      else prev();
    }
  }

  const slideStyle = {
    width: `${projects.length * 100}vw`,
    transform: `translateX(-${index * 100}vw)`,
    transition: "transform 0.6s cubic-bezier(.2,.9,.2,1)",
  };

  return (
    <section
      id="projects"
      className="w-screen min-h-screen bg-white text-black relative overflow-hidden flex items-center justify-center"
      ref={containerRef}
    >
      <div
        className="absolute inset-0 flex"
        style={slideStyle}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {projects.length === 0 ? (
          <div className="w-screen flex items-center justify-center">
            <p className="text-black">Loading projects...</p>
          </div>
        ) : (
          projects.map((p, i) => {
            const img =
              p.imagePath && (p.imagePath.startsWith("/") || p.imagePath.startsWith("http"))
                ? p.imagePath
                : "/assets/black-texture-projects.webp";
            return (
              <article
                key={p.id || i}
                className="w-screen flex-shrink-0 flex items-center justify-center px-6"
                aria-hidden={i !== index}
              >
                <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-black/5">
                    <img
                      src={img}
                      alt={p.title || p.name || `project-${i}`}
                      className="w-full h-[60vh] sm:h-[55vh] object-cover"
                    />
                  </div>

                  <div className="px-4 py-6">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-4">{p.title || p.name}</h3>
                    <p className="text-lg leading-relaxed text-black/80 mb-6">{p.description}</p>
                    {p.link && (
                      <a
                        href={p.link}
                        className="inline-block bg-black text-white px-5 py-2 rounded-md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View project
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })
        )}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:opacity-90"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:opacity-90"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-black" : "bg-black/30"}`}
          />
        ))}
      </div>
    </section>
  );
}
