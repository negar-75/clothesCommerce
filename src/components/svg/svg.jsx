import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function SVG({ desktopPath, mobilePath }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);
  const [pathLength, setPathLength] = useState(null);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  let path;
  let length;
  const handleScroll = () => {
    const scrollPercent =
      window.pageYOffset /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight);

    const draw = length * scrollPercent * 1.001;

    path.style.strokeDashoffset = length - draw;
  };

  useEffect(() => {
    path = pathRef.current;
    length = path.getTotalLength();
    setPathLength(length);
    path.style.strokeDasharray = `${length} `;
    path.style.strokeDashoffset = length;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="line-container w-full h-[100%] text-left absolute z-[-100] ">
      {isDesktopOrLaptop && (
        <svg
          viewBox="0 0 1191 2410"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          className="inline-block h-[100%] w-[100%] mt-[0%] overflow-visible"
          ref={svgRef}
        >
          <path
            d={desktopPath}
            stroke="#a5a5a5"
            ref={pathRef}
          />
        </svg>
      )}
      {isTabletOrMobile && (
        <svg
          viewBox="0 0 318 5495"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          className="inline-block h-[100%] w-[100%] overflow-visible "
          ref={svgRef}
        >
          <path
            d={mobilePath}
            stroke="#a5a5a5"
            ref={pathRef}
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}

export default SVG;
