import React from "react";
import { useSpring, animated, to } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function AnimatedDiv({ children }) {
  const [{ x, bg }, set] = useSpring(() => ({
    x: 0,
  }));
  const bind = useDrag(({ delta, down, last }) => {
    const x = down ? delta[0] : 0;
    set({ x });

    if (last && delta[0] && delta[0] > 10) {
      onEnd && onEnd();
    }
  });

  return (
    <animated.div
      {...bind()}
      style={{
        transform: x.to({
          range: [0, 0.2, 0.5, 1],
          output: [1, 0.7, 1.5, 1],
        }),
      }}
    >
      {children}
    </animated.div>
  );
}

export default AnimatedDiv;
