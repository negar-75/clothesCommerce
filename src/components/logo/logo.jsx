import React from "react";
import { useRef, useEffect } from "react";

function Logo() {
  const canvaRef = useRef();
  let dashLen;
  let dashOffset;
  let speed;
  let x;
  let i;
  let txt;
  useEffect(() => {
    const ctx = canvaRef.current.getContext("2d");
    dashLen = 220;
    dashOffset = dashLen;
    speed = 5;
    txt = "I am learning";
    x = 30;
    i = 0;
    ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif";
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.globalAlpha = 2 / 3;

    ctx.strokeStyle = ctx.fillStyle = "black";
    (function loop() {
      ctx.clearRect(x, 0, 60, 150);
      ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
      dashOffset -= speed; // reduce dash length
      ctx.strokeText(txt[i], x, 90); // stroke letter

      if (dashOffset > 0) requestAnimationFrame(loop); // animate
      else {
        ctx.fillText(txt[i], x, 90); // fill final letter
        dashOffset = dashLen; // prep next char
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
        ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random()); // random y-delta
        ctx.rotate(Math.random() * 0.005); // random rotation
        if (i < txt.length) requestAnimationFrame(loop);
      }
    })();
  }, []);
  return (
    <canvas
      width="630"
      ref={canvaRef}
    ></canvas>
  );
}

export default Logo;
