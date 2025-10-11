import { useState, useEffect, useRef } from "react";

/* import your local logos (replace with your actual files) */
import logo1 from "../assets/Samir Ghoraba logo.webp";
import logo2 from "../assets/hydraa.webp";
import logo3 from "../assets/tap.png";
import logo4 from "../assets/Profit.webp";
import logo5 from "../assets/rashat.webp";
import logo6 from "../assets/Badawi.webp";
import logo7 from "../assets/Priceless logo.webp";
import logo8 from "../assets/elfaye2.webp";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(0);

  // drag state
  const sliderRef = useRef(null);
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragDeltaRef = useRef(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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
    setIndex((i) =>
      projects.length ? (i <= 0 ? projects.length - 1 : i - 1) : 0
    );
  }
  function next() {
    setIndex((i) =>
      projects.length ? (i >= projects.length - 1 ? 0 : i + 1) : 0
    );
  }

  // unified clientX extractor
  function getClientXFromEvent(e) {
    if (!e) return 0;
    if (typeof e.clientX === "number") return e.clientX;
    if (e.touches && e.touches[0]) return e.touches[0].clientX;
    if (e.changedTouches && e.changedTouches[0])
      return e.changedTouches[0].clientX;
    return 0;
  }

  // attach native listeners for robustness
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    const supportsPointer = typeof window !== "undefined" && window.PointerEvent;

    function onStart(e) {
      draggingRef.current = true;
      setIsDragging(true);
      dragStartX.current = getClientXFromEvent(e);
      dragDeltaRef.current = 0;
      setDragDelta(0);

      // if pointer event, capture so moves go to window reliably
      if (supportsPointer && typeof e.pointerId === "number" && e.target.setPointerCapture) {
        try { e.target.setPointerCapture(e.pointerId); } catch {}
      }
    }

    function onMove(e) {
      if (!draggingRef.current) return;
      const currentX = getClientXFromEvent(e);
      const delta = currentX - dragStartX.current;
      dragDeltaRef.current = delta;
      setDragDelta(delta);
    }

    function onEnd() {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setIsDragging(false);
      const delta = dragDeltaRef.current;
      dragDeltaRef.current = 0;
      setDragDelta(0);

      const threshold = 80;
      if (delta > threshold) prev();
      else if (delta < -threshold) next();
    }

    if (supportsPointer) {
      el.addEventListener("pointerdown", onStart, { passive: true });
      window.addEventListener("pointermove", onMove, { passive: true });
      window.addEventListener("pointerup", onEnd, { passive: true });
      window.addEventListener("pointercancel", onEnd, { passive: true });
    } else {
      // touch fallback
      el.addEventListener("touchstart", onStart, { passive: true });
      window.addEventListener("touchmove", onMove, { passive: true });
      window.addEventListener("touchend", onEnd, { passive: true });
      window.addEventListener("touchcancel", onEnd, { passive: true });
      // mouse fallback
      el.addEventListener("mousedown", onStart, { passive: true });
      window.addEventListener("mousemove", onMove, { passive: true });
      window.addEventListener("mouseup", onEnd, { passive: true });
    }

    return () => {
      if (supportsPointer) {
        el.removeEventListener("pointerdown", onStart);
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onEnd);
        window.removeEventListener("pointercancel", onEnd);
      } else {
        el.removeEventListener("touchstart", onStart);
        window.removeEventListener("touchmove", onMove);
        window.removeEventListener("touchend", onEnd);
        window.removeEventListener("touchcancel", onEnd);
        el.removeEventListener("mousedown", onStart);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onEnd);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  // slider styles: use vw so each slide equals viewport width
  const sliderWidthVW = Math.max(1, projects.length) * 100;
  // transform uses vw offset for slides plus dragDelta px for live drag feel
  const transform = `translateX(calc(-${index * 100}vw + ${dragDelta}px))`;
  const slideStyle = {
    width: `${sliderWidthVW}vw`,
    transform,
    transition: isDragging ? "none" : "transform 0.6s cubic-bezier(.2,.9,.2,1)",
    display: "flex",
    touchAction: "pan-y",
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
