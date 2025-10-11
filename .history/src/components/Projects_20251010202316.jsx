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

  const wrapperRef = useRef(null); // visible viewport for slides
  const sliderRef = useRef(null); // moving element
  const containerWidthRef = useRef(0);

  // drag state
  const draggingRef = useRef(false);
  const dragStartX = useRef(0);
  const dragDeltaRef = useRef(0);
  const [dragDelta, setDragDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

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

  // stable prev/next
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

  // keyboard navigation (attach once)
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // intentionally no deps so handler uses latest closures of prev/next
  }, []);

  // measure wrapper width and update on resize
  useEffect(() => {
    function measure() {
      const w = wrapperRef.current?.clientWidth || window.innerWidth;
      containerWidthRef.current = w;
      // force slider to re-render transform by setting stateless dragDelta (no-op)
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // helper to get clientX from PointerEvent / TouchEvent
  function getClientXFromEvent(e) {
    if (!e) return 0;
    if (typeof e.clientX === "number") return e.clientX;
    if (e.touches && e.touches[0]) return e.touches[0].clientX;
    if (e.changedTouches && e.changedTouches[0])
      return e.changedTouches[0].clientX;
    return 0;
  }

  // pointer/touch drag listeners (attach once)
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;

    function onStart(e) {
      draggingRef.current = true;
      setIsDragging(true);
      dragStartX.current = getClientXFromEvent(e);
      dragDeltaRef.current = 0;
      setDragDelta(0);

      // pointer capture if available
      if (e.pointerId && e.target && e.target.setPointerCapture) {
        try {
          e.target.setPointerCapture(e.pointerId);
        } catch {console.log("error in pointer capture")}
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

      const threshold = Math.min(
        120,
        (containerWidthRef.current || window.innerWidth) * 0.12
      ); // adaptive threshold
      if (delta > threshold) prev();
      else if (delta < -threshold) next();
    }

    // prefer PointerEvents, fall back to touch/mouse
    const supportsPointer =
      typeof window !== "undefined" && window.PointerEvent;
    if (supportsPointer) {
      el.addEventListener("pointerdown", onStart);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onEnd);
      window.addEventListener("pointercancel", onEnd);
    } else {
      el.addEventListener("touchstart", onStart, { passive: true });
      window.addEventListener("touchmove", onMove, { passive: true });
      window.addEventListener("touchend", onEnd, { passive: true });
      el.addEventListener("mousedown", onStart);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onEnd);
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
        el.removeEventListener("mousedown", onStart);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("mouseup", onEnd);
      }
    };
    // attach once, projects changes don't require re-attach
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // compute slider transform in px using measured container width (keeps slides aligned to wrapper)
  const visibleWidth =
    containerWidthRef.current ||
    (typeof window !== "undefined" ? window.innerWidth : 0);
  const sliderTranslate = -index * visibleWidth + dragDelta;
  const slideCount = Math.max(1, projects.length);
  const sliderStyle = {
    width: `${slideCount * visibleWidth}px`,
    transform: `translate3d(${sliderTranslate}px,0,0)`,
    transition: isDragging
      ? "none"
      : "transform 0.45s cubic-bezier(.2,.9,.2,1)",
    display: "flex",
  };

  const slideItemStyle = {
    flex: `0 0 ${visibleWidth}px`,
    maxWidth: `${visibleWidth}px`,
  };

  return (
    <section
      id="projects"
      className="projects w-screen min-h-screen bg-white text-black flex items-center justify-center py-12 px-4 overflow-hidden"
    >
      <div
        ref={wrapperRef}
        className="wrapper w-full max-w-[1200px] rounded-[20px] shadow-lg bg-white relative overflow-hidden mx-auto"
      >
        <div ref={sliderRef} style={sliderStyle} className="carousel">
          {projects.map((p, i) => {
            const logo = logos[i % logos.length];
            return (
              <article
                key={p.id || i}
                style={slideItemStyle}
                className="flex items-center justify-center px-6 py-12"
              >
                <div className="w-full px-6 py-8">
                  <div className="max-w-[1100px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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

                    <div>
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
