<script>
  import { onMount } from "svelte";

  export let RATE = 0.99;
  export let INV_RATE = 0.8;

  const SIZE =5;
  const NUMBER = 500;
  const COLOR = "rgb(8,22,29)";
  const NOISE = 5;
  const RADIUS = 200;
  const VAR = 3;
  const MIN_OPACITY = 0.01;
  const MIN_ANGLE = 0.5;

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext("2d");

    // Get the center point of the canvas
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create an array to store the points
    let points = [];

    // Create the points in a circle with noise
    for (let i = 0; i < NUMBER; i++) {
      const angle = (i / NUMBER) * 2 * Math.PI;
      const x =
        centerX + Math.cos(angle) * RADIUS + (Math.random() * 2 - 1) * NOISE;
      const y =
        centerY + Math.sin(angle) * RADIUS + (Math.random() * 2 - 1) * NOISE;

      // Generate a random point size based on a normal distribution centered on SIZE
      let size = 0;
      while (size <= 0) {
        size = SIZE + Math.random() * VAR * (Math.random() > 0.5 ? 1 : -1);
      }
      points.push({ x, y, size });

      // Draw the dot
      ctx.beginPath();
      ctx.arc(x, y, size, 0, 2 * Math.PI);
      ctx.fillStyle = COLOR;
      ctx.fill();
    }

    // Create an array to store the lines
    let lines = [];

    function draw() {
      // Randomly choose two points
      let p1 = points[Math.floor(Math.random() * points.length)];
      let p2 = points[Math.floor(Math.random() * points.length)];

      ////////////ANTONIO'S CONDITION////////////////
      // angle of two points
      const angle1 = Math.atan2(p1.y - centerY, p1.x - centerX);
      const angle2 = Math.atan2(p2.y - centerY, p2.x - centerX);
      const angleDiff = angle2 - angle1;

      //CONTROL POINTS
      // control point positions
      const controlPoint1 = {
        //x: p1.x + Math.cos(angle1 + angleDiff * 0.5) * RADIUS / 2,
        //y: p1.y + Math.sin(angle1 + angleDiff * 0.5) * RADIUS / 2,
        x: centerX,
        y: centerY,
      };
      const controlPoint2 = {
        //x: p2.x - Math.cos(angle2 - angleDiff * 0.5) * RADIUS / 2,
        x: centerX,
        y: centerY,
        //y: p2.y - Math.sin(angle2 - angleDiff * 0.5) * RADIUS / 2,
      };

      if (angleDiff > MIN_ANGLE && Math.random() > INV_RATE) {
        lines.push({
          p1,
          p2,
          color: COLOR,
          opacity: 1,
          controlPoint1: controlPoint1,
          controlPoint2: controlPoint2,
        });
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the points again
      for (let point of points) {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, 2 * Math.PI);
        ctx.fillStyle = COLOR;
        ctx.fill();
      }

      // Draw all the lines in the array
      for (let i = 0; i < lines.length; i++) {
        // Get the current line
        const line = lines[i];

        // Reduce the opacity of the line by half
        line.opacity = line.opacity * RATE;

        // If the line's opacity is less than MIN_OPACITY
        if (line.opacity < MIN_OPACITY) {
          // Remove the line from the array
          lines.splice(i, 1);
          i--;
          continue;
        }

        // Set the opacity
        ctx.globalAlpha = line.opacity;

        // Draw the line
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.moveTo(line.p1.x, line.p1.y);
        // ctx.bezierCurveTo(
        //   line.controlPoint1.x,
        //   line.controlPoint1.y,
        //   line.controlPoint2.x,
        //   line.controlPoint2.y,
        //   line.p2.x,
        //   line.p2.y
        // );
        ctx.lineTo(line.p2.x, line.p2.y);
        ctx.strokeStyle = line.color;
        ctx.stroke();
      }

      // Reset the global alpha
      ctx.globalAlpha = 1;

      // Continue to draw the lines
      requestAnimationFrame(draw);
    }

    // Start drawing the lines
    draw();
  });
</script>

<canvas bind:this={canvas} width="500px" height="500px" />

<style>
  canvas {
    width: 100%;
    height: 100%;
  }
</style>
