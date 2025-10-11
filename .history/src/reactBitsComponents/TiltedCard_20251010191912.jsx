import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);

  // base motion values (set these) and springs (read-only-ish)
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const baseRotateX = useMotionValue(0);
  const baseRotateY = useMotionValue(0);
  const rotateX = useSpring(baseRotateX, springValues);
  const rotateY = useSpring(baseRotateY, springValues);

  const baseScale = useMotionValue(1);
  const scale = useSpring(baseScale, springValues);

  const baseOpacity = useMotionValue(0);
  const opacity = useSpring(baseOpacity, { stiffness: 300, damping: 35 });

  const baseRotateFig = useMotionValue(0);
  const rotateFigcaption = useSpring(baseRotateFig, { stiffness: 350, damping: 30, mass: 1 });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    // set base motion values (springs follow)
    baseRotateX.set(rotationX);
    baseRotateY.set(rotationY);

    pointerX.set(e.clientX - rect.left);
    pointerY.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    baseRotateFig.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    baseScale.set(scaleOnHover);
    baseOpacity.set(1);
  }

  function handleMouseLeave() {
    baseOpacity.set(0);
    baseScale.set(1);
    baseRotateX.set(0);
    baseRotateY.set(0);
    baseRotateFig.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center overflow-hidden"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d] rounded-[20px]"
        style={{
          backgroundColor: "black",
          overflow: "hidden",
          width: imageWidth,
          height: imageHeight,
          rotateX, // spring MotionValues
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute inset-0 z-[3] flex justify-center items-center will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x: pointerX,
            y: pointerY,
            opacity,
            rotate: rotateFigcaption,
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
