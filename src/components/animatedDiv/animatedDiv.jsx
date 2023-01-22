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
        transform: to([x], (x) => `translate3d(${x}px,0,0)`),
      }}
    >
      {children}
    </animated.div>
  );
}

export default AnimatedDiv;
