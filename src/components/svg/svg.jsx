import { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function SVG({ desktopPath, desktopViewBox, mobilePath, mobileViewBox }) {
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

    const draw = length * scrollPercent;

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
  }, [pathLength]);

  return (
    <div className="line-container w-full h-[100%] text-left absolute z-[-100] ">
      {isDesktopOrLaptop && (
        <svg
          viewBox={desktopViewBox}
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          className="inline-block h-[100%] w-[100%] mt-[0%] overflow-visible"
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
          viewBox={mobileViewBox}
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          className="inline-block h-[100%] w-[100%] overflow-visible "
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
