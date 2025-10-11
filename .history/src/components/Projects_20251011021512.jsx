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
  const containerWidthRef = useRef(0);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const deltaRef = useRef(0);
  const [delta, setDelta] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Fetch projects
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

  // Measure container width
  useEffect(() => {
    function measure() {
      containerWidthRef.current =
        wrapperRef.current?.clientWidth || window.innerWidth * 0.8;
      const count = Math.max(1, projects.length);
      if (index >= count) setIndex(count - 1);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [projects, index]);

  // Keyboard navigation
  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight")
        setIndex((i) => Math.min((projects.length || 1) - 1, i + 1));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projects.length]);

  // Swipe & drag logic
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

      const width = containerWidthRef.current || window.innerWidth * 0.8;
      const threshold = Math.max(30, width * 0.08);
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
      <section id="projects" className="py-24 flex justify-center items-center">
        <div>Loading projects…</div>
      </section>
    );

  if (error)
    return (
      <section id="projects" className="py-24 flex justify-center items-center">
        <div className="text-red-600">Error: {error}</div>
      </section>
    );

  if (!projects.length)
    return (
      <section id="projects" className="py-24 flex justify-center items-center">
        <div>No projects found.</div>
      </section>
    );

  const visibleWidth = containerWidthRef.current || window.innerWidth * 0.8;
  

  return (
    <section
      id="projects"
      className="py-24 flex flex-col items-center justify-center relative"
    >
    </section>
  );
}
