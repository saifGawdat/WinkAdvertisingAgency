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

  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const containerWidthRef = useRef(0);

  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  // fetch projects
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

  // keyboard nav
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // measure wrapper width
  useEffect(() => {
    function measure() {
      const w = wrapperRef.current?.clientWidth || window.innerWidth;
      containerWidthRef.current = w;
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // drag/swipe logic (fixed)
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    let startX = 0;
    let delta = 0;
    let dragging = false;

    function handleStart(e) {
      startX = e.type === "mousedown" ? e.clientX : e.touches[0].clientX;
      dragging = true;
      setIsDragging(true);
      el.style.cursor = "grabbing";
    }

    function handleMove(e) {
      if (!dragging) return;
      const currentX =
        e.type === "mousemove" ? e.clientX : e.touches[0].clientX;
      delta = currentX - startX;
      setDragDelta(delta);
    }

    function handleEnd() {
      if (!dragging) return;
      dragging = false;
      setIsDragging(false);
      el.style.cursor = "grab";

      const threshold = Math.min(40, containerWidthRef.current * 0.15);
      if (Math.abs(delta) > threshold) {
        delta > 0 ? prev() : next();
      }

      setDragDelta(0);
      delta = 0;
    }

    el.addEventListener("touchstart", handleStart, { passive: true });
    el.addEventListener("touchmove", handleMove, { passive: true });
    el.addEventListener("touchend", handleEnd);
    el.addEventListener("mousedown", handleStart);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);

    return () => {
      el.removeEventListener("touchstart", handleStart);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleEnd);
      el.removeEventListener("mousedown", handleStart);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
    };
  }, [prev, next]);

  const visibleWidth =
    containerWidthRef.current ||
    (typeof window !== "undefined" ? window.innerWidth : 0);
  const sliderTranslate = -index * visibleWidth + dragDelta;
  const slideCount = Math.max(1, projects.length);
  const sliderStyle = {
    width: `${slideCount * visibleWidth}px`,
    transform: `translate3d(${sliderTranslate}px,0,0)`,
    transition: isDragging ? "none" : "transform 0.3s ease-out",
    display: "flex",
    willChange: "transform",
    touchAction: "pan-y pinch-zoom",
  };

  const slideItemStyle = {
    flex: `0 0 ${visibleWidth}px`,
    maxWidth: `${visibleWidth}px`,
  };

  return (
    <section
      id="projects"
      className="projects w-screen max-h-[80#] bg-white text-black flex items-center justify-center py-12 px-4 overflow-hidden"
    >
      <div
        ref={wrapperRef}
        className="wrapper w-full rounded-[20px] shadow-lg bg-white relative overflow-hidden mx-auto"
      >
        <div
          ref={sliderRef}
          style={sliderStyle}
          className="carousel cursor-grab active:cursor-grabbing"
        >
          {projects.map((p, i) => {
            const logo = logos[i % logos.length];
            return (
              <article
                key={p.id || i}
                style={slideItemStyle}
                className="flex items-center justify-center px-6 py-12"
              >
                <div className="w-full px-6 py-8">
                  <div className="max-w-[1100px] w-full mx-auto flex flex-col gap-10">
                    {/* Logo section */}
                    <div className="flex items-start justify-start">
                      <div className="w-[180px] h-[180px] rounded-2xl overflow-hidden flex items-center justify-center bg-white p-4">
                        <img
                          src={logo}
                          alt={p.name || `project-${i}`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src =
                              "/assets/black-texture-projects.webp";
                          }}
                        />
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="w-full">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        {p.name || p.title}
                        <br />
                      </h3>
                      <p className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
                        brief: <br />
                        {p.brief || p.description || "Brief not provided."}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-xl md:text-2xl font-semibold mb-3">
                          Solutions:
                        </h4>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                          {p.solution || "Solutions summary not provided."}
                        </p>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-xl md:text-2xl font-semibold mb-3">
                          Results:
                          <br />
                        </h4>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                          {p.results || p.kpis || "Results not provided."}
                        </p>
                      </div>

                      {p.link && (
                        <a
                          href={p.link}
                          className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-md text-lg"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View case
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Navigation dots */}
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
