import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import { to } from "react-spring";

function AnimatedDiv({ children }) {
  const [{ x }, set] = useSpring(() => ({
    x: 0,
  }));

  const bind = useDrag(({ delta, down, last }) => {
    const x = down ? delta[0] : 0;
    set({ x });

    if (last && delta[0] && delta[0] > 100) {
      onEnd && onEnd();
    }
  });
  const transform = to([x], (x) => `translate3d(${x}px,0,0)`);

  return (
    <animated.div
      {...bind()}
      style={{ transform }}
    >
      {children}
    </animated.div>
  );
}

export default AnimatedDiv;
