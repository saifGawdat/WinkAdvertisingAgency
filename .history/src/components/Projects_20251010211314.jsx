import { useState, useEffect, useRef } from "react";

/* import your local logos - update paths/names to match your files */
import logo1 from "../assets/Samir Ghoraba logo.webp";
import logo2 from "../assets/hydraa.webp";
import logo3 from "../assets/tap.webp";
import logo4 from "../assets/Profit.webp";
import logo5 from "../assets/rashat.webp";
import logo6 from "../assets/Badawi.webp";
import logo7 from "../assets/Priceless logo.webp";
import logo8 from "../assets/elfaye2.webp";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

  const [index, setIndex] = useState(0);
  const wrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const containerWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const deltaRef = useRef(0);
  const [delta, setDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          "https://winkbackend-production.up.railway.app/api/projects"
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        let items = [];
        if (Array.isArray(data)) items = data;
        else if (Array.isArray(data.data)) items = data.data;
        else if (Array.isArray(data.projects)) items = data.projects;
        else {
          const possible = Object.values(data).find((v) => Array.isArray(v));
          if (possible) items = possible;
        }

        if (mounted) setProjects(items.slice(0, 8));
      } catch (err) {
        console.error("Error fetching project data:", err);
        if (mounted) setError(err.message || "Fetch error");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    function measure() {
      containerWidthRef.current =
        wrapperRef.current?.clientWidth || window.innerWidth;
      const count = Math.max(
        1,
        Math.min(projects.length || 1, projects.length)
      );
      if (index >= count) setIndex(count - 1);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [projects, index]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min((projects.length || 1) - 1, i + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projects.length]);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    function getClientX(e) {
      if (typeof e.clientX === "number") return e.clientX;
      if (e.touches && e.touches[0]) return e.touches[0].clientX;
      if (e.changedTouches && e.changedTouches[0])
        return e.changedTouches[0].clientX;
      return 0;
    }

    function onStart(e) {
      draggingRef.current = true;
      setIsDragging(true);
      startXRef.current = getClientX(e);
      deltaRef.current = 0;
      setDelta(0);
    }

    function onMove(e) {
      if (!draggingRef.current) return;
      const current = getClientX(e);
      const diff = current - startXRef.current;
      deltaRef.current = diff;
      setDelta(diff);
    }

    function onEnd() {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setIsDragging(false);
      const moved = deltaRef.current;
      deltaRef.current = 0;
      setDelta(0);

      const width = containerWidthRef.current || window.innerWidth;
      const threshold = Math.max(40, width * 0.12);
      if (moved > threshold) setIndex((i) => Math.max(0, i - 1));
      else if (moved < -threshold)
        setIndex((i) => Math.min((projects.length || 1) - 1, i + 1));
    }

    el.addEventListener("touchstart", onStart, { passive: true });
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("touchend", onEnd);
    el.addEventListener("mousedown", onStart);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onEnd);

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("mousedown", onStart);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onEnd);
    };
  }, [projects.length]);

  if (loading)
    return (
      <section
        id="projects"
        className="w-screen py-24 flex items-center justify-center"
      >
        <div>Loading projects…</div>
      </section>
    );

  if (error)
    return (
      <section
        id="projects"
        className="w-screen py-24 flex items-center justify-center"
      >
        <div className="text-red-600">Error: {error}</div>
      </section>
    );

  if (!projects.length)
    return (
      <section
        id="projects"
        className="w-screen py-24 flex items-center justify-center"
      >
        <div>No projects found.</div>
      </section>
    );

  const visibleWidth = containerWidthRef.current || window.innerWidth;
  const slideCount = Math.max(1, projects.length);
  const translate = -index * visibleWidth + delta;
  const sliderStyle = {
    width: `${slideCount * visibleWidth}px`,
    transform: `translate3d(${translate}px,0,0)`,
    transition: isDragging
      ? "none"
      : "transform 0.45s cubic-bezier(.2,.9,.2,1)",
    display: "flex",
    willChange: "transform",
  };
  const slideStyle = {
    flex: `0 0 ${visibleWidth}px`,
    maxWidth: `${visibleWidth}px`,
    boxSizing: "border-box",
  };

  return (
    <section
      id="projects"
      className="w-screen py-24 flex flex-col items-center justify-center relative"
    >
      <div className="w-full px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Our Projects
        </h2>
      </div>

      <div
        ref={wrapperRef}
        className="w-full max-w-[900px] mx-auto relative overflow-hidden"
        style={{
          touchAction: "pan-y",
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        <div ref={sliderRef} style={sliderStyle}>
          {projects.map((project, idx) => {
            const logo = logos[idx % logos.length];
            return (
              <article
                key={project.id ?? idx}
                style={slideStyle}
                className="px-6 py-12 flex items-start justify-center"
              >
                <div className="w-full max-w-[820px]">
                  <div
                    className="relative bg-white rounded-lg shadow p-6 mx-auto"
                    style={{ minHeight: 300 }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        width: 180,
                        height: 180,
                      }}
                    >
                      <img
                        src={logo}
                        alt={project.name ?? project.title ?? "logo"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: 12,
                        }}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            "/assets/black-texture-projects.webp";
                        }}
                      />
                    </div>

                    <div style={{ marginTop: 220 }}>
                      <h3 className="text-3xl font-bold mb-4">
                        {project.name ?? project.title ?? "Untitled"}
                      </h3>

                      <p className="text-lg mb-4">
                        <strong>BRIEF:</strong>
                        <br />
                        {project.brief ?? project.description ?? "-"}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-xl font-semibold mb-2">
                          Solutions
                        </h4>
                        <p className="text-lg">
                          {project.solution ?? project.solutions ?? "-"}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-xl font-semibold mb-2">Results</h4>
                        <p className="text-lg">
                          {project.result ?? project.results ?? "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* centered dots below the slider */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 flex justify-center items-center gap-3 z-20">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index ? "true" : "false"}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-black scale-125 shadow-lg"
                  : "bg-black/30 hover:bg-black/50 scale-100"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
