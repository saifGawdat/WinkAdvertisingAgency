import { useState, useEffect, useRef } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    let mounted = true;
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        // normalize and take first 8 entries
        const list = Array.isArray(data) ? data.slice(0, 8) : [];
        // if API returns fewer than 8, duplicate to reach 8 (keeps carousel size stable)
        while (list.length < 8) {
          list.push(
            list[list.length - 1] || {
              id: `placeholder-${list.length}`,
              name: "Placeholder",
              brief: "Brief about the project.",
              solutions: "Solution overview.",
              results: "Results / impact.",
              logoPath: "/assets/black-texture-projects.webp",
            }
          );
        }
        setProjects(list);
      })
      .catch(() => {
        if (!mounted) return;
        // fallback placeholders (8)
        const fallback = new Array(8)
          .fill(0)
          .map((_, i) => ({
            id: `fb-${i}`,
            name: `Project ${i + 1}`,
            brief: "Short brief goes here.",
            solutions: "Solutions provided for the client.",
            results: "Measured results / KPIs.",
            logoPath: "/assets/black-texture-projects.webp",
          }));
        setProjects(fallback);
      });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  function prev() {
    setIndex((i) => (i <= 0 ? projects.length - 1 : i - 1));
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
    touchStartX.current = 0;
    touchEndX.current = 0;
  }

  const slideStyle = {
    width: `${projects.length * 100}vw`,
    transform: `translateX(-${index * 100}vw)`,
    transition: "transform 0.6s cubic-bezier(.2,.9,.2,1)",
  };

  return (
    <section
      id="projects"
      className="projects w-screen min-h-screen bg-white text-black flex items-center justify-center py-12 px-4 overflow-hidden"
    >
      <div className="wrapper w-full max-w-[1200px] rounded-[20px] shadow-lg bg-white">
        <div
          ref={sliderRef}
          className="carousel flex items-stretch h-full w-full"
          style={slideStyle}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((p, i) => {
            const logo =
              (p.logoPath &&
              (p.logoPath.startsWith("/") || p.logoPath.startsWith("http")))
                ? p.logoPath
                : p.logo || p.imagePath || "/assets/black-texture-projects.webp";
            return (
              <article
                key={p.id || i}
                className="w-screen flex-shrink-0 flex items-center justify-center px-6 py-12"
                aria-hidden={i !== index}
              >
                <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Logo / visual */}
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-[520px] rounded-2xl overflow-hidden flex items-center justify-center bg-white">
                      <img
                        src={logo}
                        alt={p.name || `project-${i}`}
                        className="w-[220px] h-[220px] md:w-[300px] md:h-[300px] object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/assets/black-texture-projects.webp";
                        }}
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="px-2 md:px-6">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {p.name || p.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-800 mb-4">
                      {p.brief || p.description || "Brief not provided."}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Solutions</h4>
                      <p className="text-sm md:text-base text-gray-700">
                        {p.solutions ||
                          "Solutions summary not provided."}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <p className="text-sm md:text-base text-gray-700">
                        {p.results || p.kpis || "Results not provided."}
                      </p>
                    </div>

                    {/* optional link */}
                    {p.link && (
                      <a
                        href={p.link}
                        className="inline-block mt-6 bg-black text-white px-4 py-2 rounded-md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View case
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* controls */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hidden md:block"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hidden md:block"
        >
          ›
        </button>

        {/* dots */}
        <div className="flex gap-3 justify-center py-6">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-black" : "bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
