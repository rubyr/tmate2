import React, { useEffect } from "react";
import p5 from "p5";
import "./GameBackground.css";

const GameBackground = () => {
  useEffect(() => {
    const bg = (s: p5) => {
      const X_AXIS = 1;
      const Y_AXIS = 2;
      s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight - 60);
        s.noLoop();
      };

      s.draw = () => {
        const { width, height } = s;

        // bg gradients
        setGradient(
          0,
          0,
          width,
          height / 2,
          s.color("#223288"),
          s.color("#ee1493"),
          Y_AXIS
        );
        setGradient(
          0,
          height / 2,
          width,
          height,
          s.color("#331188"),
          s.color("#6522a9"),
          Y_AXIS
        );

        // lines

        // horizontal
        let y = height / 2;
        let i = 0;
        while (y < height) {
          fadedLine(0, y, width, y, s.color(255));
          y += i += 2;
        }

        // vertical
        const inc = Math.max((width % 300) / 10, 30);
        for (let x = 0; x < width; x += inc) {
          const x2 = (x - width / 2) * 2 + x;
          fadedLine(x, height / 2 + 2, x2, height, s.color(255));
        }

        // sun
        // arc
        s.push();
        s.stroke(s.color("#eacc4644"));
        s.strokeWeight(3);
        s.fill(s.color("#eacc46"));
        s.arc(width / 2, height / 2, 180, 180, Math.PI, 0, "chord");
        s.noFill();
        for (let i = 0; i < 200; i++) {
          s.stroke(s.color(234, 204, 70, 200 - i));
          s.arc(width / 2, height / 2, 180 + i, 180 + i, Math.PI, 0);
        }
        s.pop();

        // reflection
        s.push();
        s.noStroke();
        s.fill(s.color("#eacc4644"));
        for (let i = 0; i < 4; i++) {
          s.rect(width / 2 - 180, height / 2 + i * 30, 360, 20);
          s.fill(s.color("#eacc46" + ((4 - i).toString() + (4 - i))));
        }
      };

      const fadedLine = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        c: p5.Color
      ) => {
        // calculate line normals
        const norm1x = y1 - y2;
        const norm1y = x2 - x1;
        let offset1 = s.createVector(norm1x, norm1y).setMag(2);
        const norm2x = y2 - y1;
        const norm2y = x1 - x2;
        let offset2 = s.createVector(norm2x, norm2y).setMag(2);
        s.push();
        s.noFill();
        s.strokeWeight(2);
        s.stroke(s.color(s.red(c), s.blue(c), s.green(c), s.alpha(c) / 4));
        s.line(x1 + offset1.x, y1 + offset1.y, x2 + offset1.x, y2 + offset1.y);
        s.line(x1 + offset2.x, y1 + offset2.y, x2 + offset2.x, y2 + offset2.y);

        offset1 = offset1.setMag(1);
        offset2 = offset2.setMag(1);

        s.line(x1 + offset1.x, y1 + offset1.y, x2 + offset1.x, y2 + offset1.y);
        s.line(x1 + offset2.x, y1 + offset2.y, x2 + offset2.x, y2 + offset2.y);
        s.strokeWeight(1.5);
        s.stroke(c);
        s.line(x1, y1, x2, y2);
        s.pop();
      };

      const setGradient = (
        x: number,
        y: number,
        w: number,
        h: number,
        c1: p5.Color,
        c2: p5.Color,
        axis: 1 | 2
      ) => {
        s.noFill();

        if (axis === Y_AXIS) {
          // Top to bottom gradient
          for (let i = y; i <= y + h; i++) {
            let inter = s.map(i, y, y + h, 0, 1);
            let c = s.lerpColor(c1, c2, inter);
            s.stroke(c);
            s.line(x, i, x + w, i);
          }
        } else if (axis === X_AXIS) {
          // Left to right gradient
          for (let i = x; i <= x + w; i++) {
            let inter = s.map(i, x, x + w, 0, 1);
            let c = s.lerpColor(c1, c2, inter);
            s.stroke(c);
            s.line(i, y, i, y + h);
          }
        }
      };
    };

    new p5(
      bg,
      document.querySelector("#background") as HTMLElement // this line is required due to p5
    );
  }, []);

  return <div className="Game-Background" id="background"></div>;
};

export default GameBackground;
