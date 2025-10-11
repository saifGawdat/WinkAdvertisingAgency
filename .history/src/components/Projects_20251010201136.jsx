import { useState, useEffect, useRef } from "react";

/* import your local logos (replace with your actual files) */
import logo1 from "../assets/Samir Ghoraba logo.webp";
import logo2 from "../assets/hydraa.webp";
import logo3 from "../assets/tap.png";
import logo4 from "../assets/Profit.webp";
import logo5 from "../asset";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);

  // drag state
  const sliderRef = useRef(null);
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const [dragDelta, setDragDelta] = useState(0);

  // local logos array (will be used instead of API logoPath)
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  useEffect(() => {
    let mounted = true;
    fetch("https://winkbackend-production.up.railway.app/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (!mounted) return;
        const list = Array.isArray(data) ? data.slice(0, 8) : [];
        while (list.length < 8) {
          list.push({
            id: `placeholder-${list.length}`,
            name: "Placeholder",
            brief: "Brief about the project.",
            solutions: "Solution overview.",
            results: "Results / impact.",
            logoPath: null,
          });
        }
        setProjects(list);
      })
      .catch(() => {
        if (!mounted) return;
        const fallback = new Array(8).fill(0).map((_, i) => ({
          id: `fb-${i}`,
          name: `Project ${i + 1}`,
          brief: "Short brief goes here.",
          solutions: "Solutions provided for the client.",
          results: "Measured results / KPIs.",
          logoPath: null,
        }));
        setProjects(fallback);
      });
    return () => {
      mounted = false;
    };
  }, []);

  // keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projects]);

  function prev() {
    setIndex((i) => (i <= 0 ? projects.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i >= projects.length - 1 ? 0 : i + 1));
  }

  // pointer (mouse + touch) handlers for swipe
  function onPointerDown(e) {
    draggingRef.current = true;
    dragStartX.current = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
    setDragDelta(0);
    // capture pointer for mouse
    if (e.target.setPointerCapture)
      try {
        e.target.setPointerCapture(e.pointerId);
      } catch {}
  }

  function onPointerMove(e) {
    if (!draggingRef.current) return;
    const currentX = e.clientX ?? (e.touches && e.touches[0].clientX) ?? 0;
    setDragDelta(currentX - dragStartX.current);
  }

  function onPointerUp(e) {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const delta = dragDelta;
    setDragDelta(0);

    const threshold = 80; // px to trigger slide
    if (delta > threshold) {
      prev();
    } else if (delta < -threshold) {
      next();
    }
  }

  // slider styles: width using percent, transform combines index and dragDelta for live dragging feel
  const sliderWidthPercent = Math.max(1, projects.length) * 100;
  const transform = `calc(-${index * 100}% + ${dragDelta}px)`;
  const slideStyle = {
    width: `${sliderWidthPercent}%`,
    transform,
    transition: draggingRef.current
      ? "none"
      : "transform 0.6s cubic-bezier(.2,.9,.2,1)",
    display: "flex",
    touchAction: "pan-y", // allow vertical scroll while swiping horizontally
  };

  return (
    <section
      id="projects"
      className="projects w-screen min-h-screen bg-white text-black flex items-center justify-center py-12 px-4 overflow-hidden"
    >
      <div className="wrapper w-full max-w-[1200px] rounded-[20px] shadow-lg bg-white relative overflow-hidden">
        <div
          ref={sliderRef}
          className="carousel"
          style={slideStyle}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseLeave={() => {
            if (draggingRef.current) onPointerUp();
          }}
        >
          {projects.map((p, i) => {
            const logo = logos[i % logos.length]; // use your imported local logos
            return (
              <article
                key={p.id || i}
                className="w-[100vw] flex-shrink-0 flex items-center justify-center px-6 py-12"
                aria-hidden={i !== index}
              >
                <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Logo / visual */}
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-[520px] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-6">
                      <img
                        src={logo}
                        alt={p.name || `project-${i}`}
                        className="w-[260px] h-[260px] md:w-[340px] md:h-[340px] object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "/assets/black-texture-projects.webp";
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
                        {p.solutions || "Solutions summary not provided."}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Results</h4>
                      <p className="text-sm md:text-base text-gray-700">
                        {p.results || p.kpis || "Results not provided."}
                      </p>
                    </div>

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
