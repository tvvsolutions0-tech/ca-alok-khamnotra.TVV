import React, { useEffect, useRef, useState } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
}

export default function ThreeDCAAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let angleY = 0;
    let angleX = 0.2; // slight downward view
    const fov = 400;

    // Handle Resize
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track Mouse
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      // Normalize to -1 to 1
      const x = (clientX / rect.width) * 2 - 1;
      const y = (clientY / rect.height) * 2 - 1;
      setMouse((prev) => ({ ...prev, targetX: x, targetY: y }));
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => {
      setHovered(false);
      setMouse((prev) => ({ ...prev, targetX: 0, targetY: 0 }));
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Helper functions for 3D rotation and projection
    const rotateY = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x * cos - p.z * sin,
        y: p.y,
        z: p.x * sin + p.z * cos,
      };
    };

    const rotateX = (p: Point3D, angle: number): Point3D => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return {
        x: p.x,
        y: p.y * cos - p.z * sin,
        z: p.y * sin + p.z * cos,
      };
    };

    const project = (p: Point3D, width: number, height: number) => {
      const scale = fov / (fov + p.z);
      return {
        x: width / 2 + p.x * scale,
        y: height / 2 + p.y * scale,
        scale,
      };
    };

    // Financial Floating Particles
    interface Particle {
      p: Point3D;
      symbol: string;
      speedY: number;
      opacity: number;
      color: string;
    }

    const symbols = ['₹', '%', '📈', '✔', '+$', '▲'];
    const colors = ['#D4AF37', '#93C5FD', '#FBBF24', '#34D399', '#E2E8F0'];

    const particles: Particle[] = Array.from({ length: 15 }, () => ({
      p: {
        x: (Math.random() - 0.5) * 300,
        y: Math.random() * 200 - 100,
        z: (Math.random() - 0.5) * 300,
      },
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      speedY: 0.4 + Math.random() * 0.6,
      opacity: 0.3 + Math.random() * 0.7,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Animation Loop
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      // Smooth mouse damping
      setMouse((prev) => {
        const nextX = prev.x + (prev.targetX - prev.x) * 0.1;
        const nextY = prev.y + (prev.targetY - prev.y) * 0.1;
        return { ...prev, x: nextX, y: nextY };
      });

      // Increment rotation angles
      angleY += 0.005 + mouse.x * 0.008; // responsive to mouse X speed
      const finalAngleX = angleX + mouse.y * 0.15; // responsive to mouse Y tilting

      // 1. DRAW 3D FLOOR GRID (Ledger rows)
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 160;
      const gridSteps = 8;
      for (let i = -gridSteps; i <= gridSteps; i++) {
        // Parallel lines
        const p1 = { x: i * (gridSize / gridSteps), y: 110, z: -gridSize };
        const p2 = { x: i * (gridSize / gridSteps), y: 110, z: gridSize };
        const p3 = { x: -gridSize, y: 110, z: i * (gridSize / gridSteps) };
        const p4 = { x: gridSize, y: 110, z: i * (gridSize / gridSteps) };

        // Rotate and Project Lines
        const rp1 = project(rotateX(rotateY(p1, angleY), finalAngleX), w, h);
        const rp2 = project(rotateX(rotateY(p2, angleY), finalAngleX), w, h);
        const rp3 = project(rotateX(rotateY(p3, angleY), finalAngleX), w, h);
        const rp4 = project(rotateX(rotateY(p4, angleY), finalAngleX), w, h);

        ctx.beginPath();
        ctx.moveTo(rp1.x, rp1.y);
        ctx.lineTo(rp2.x, rp2.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(rp3.x, rp3.y);
        ctx.lineTo(rp4.x, rp4.y);
        ctx.stroke();
      }

      // 2. DRAW FLOATING 3D PARTICLES (Rising symbols)
      particles.forEach((part) => {
        part.p.y -= part.speedY;
        if (part.p.y < -150) {
          part.p.y = 150;
          part.p.x = (Math.random() - 0.5) * 300;
          part.p.z = (Math.random() - 0.5) * 300;
        }

        const rotated = rotateX(rotateY(part.p, angleY), finalAngleX);
        if (rotated.z > -fov) {
          const proj = project(rotated, w, h);
          ctx.font = `${Math.floor(14 * proj.scale)}px sans-serif`;
          ctx.fillStyle = part.color;
          ctx.globalAlpha = part.opacity * Math.max(0, 1 - rotated.z / fov);
          ctx.fillText(part.symbol, proj.x, proj.y);
        }
      });
      ctx.globalAlpha = 1.0; // reset

      // 3. DRAW GROWING 3D FINANCIAL BAR CHARTS
      // We draw 4 growing pillars representing quarterly growth
      const bars = [
        { x: -140, z: -80, h: -60, currentH: 0, label: 'Q1' },
        { x: -100, z: -80, h: -90, currentH: 0, label: 'Q2' },
        { x: -60, z: -80, h: -120, currentH: 0, label: 'Q3' },
        { x: -20, z: -80, h: -170, currentH: 0, label: 'Q4' },
      ];

      bars.forEach((bar, idx) => {
        const pulse = Math.sin(Date.now() * 0.002 + idx) * 15;
        const targetHeight = bar.h + pulse;

        // Base 3D Coordinates of the column cuboid
        const size = 15;
        const baseCenter = { x: bar.x, y: 110, z: bar.z };
        const topCenter = { x: bar.x, y: 110 + targetHeight, z: bar.z };

        // Define corners of cuboid
        const corners = [
          { x: -size, z: -size },
          { x: size, z: -size },
          { x: size, z: size },
          { x: -size, z: size },
        ];

        // Bottom vertices
        const bottomVerts = corners.map((c) => ({
          x: baseCenter.x + c.x,
          y: baseCenter.y,
          z: baseCenter.z + c.z,
        }));

        // Top vertices
        const topVerts = corners.map((c) => ({
          x: topCenter.x + c.x,
          y: topCenter.y,
          z: topCenter.z + c.z,
        }));

        // Rotate and project all vertices
        const rBottom = bottomVerts.map((v) =>
          project(rotateX(rotateY(v, angleY), finalAngleX), w, h)
        );
        const rTop = topVerts.map((v) =>
          project(rotateX(rotateY(v, angleY), finalAngleX), w, h)
        );

        // Draw sides of column (with gradients based on depth)
        // Draw bottom face
        ctx.fillStyle = 'rgba(212, 175, 55, 0.05)';
        ctx.beginPath();
        ctx.moveTo(rBottom[0].x, rBottom[0].y);
        rBottom.forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.closePath();
        ctx.fill();

        // Draw side columns (we do front-facing panels for 3D look)
        for (let s = 0; s < 4; s++) {
          const nextS = (s + 1) % 4;
          const gradient = ctx.createLinearGradient(
            rTop[s].x,
            rTop[s].y,
            rBottom[s].x,
            rBottom[s].y
          );
          // High-end golden to subtle charcoal gradient
          gradient.addColorStop(0, s % 2 === 0 ? 'rgba(212, 175, 55, 0.6)' : 'rgba(212, 175, 55, 0.4)');
          gradient.addColorStop(1, 'rgba(15, 23, 42, 0.1)');

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(rTop[s].x, rTop[s].y);
          ctx.lineTo(rTop[nextS].x, rTop[nextS].y);
          ctx.lineTo(rBottom[nextS].x, rBottom[nextS].y);
          ctx.lineTo(rBottom[s].x, rBottom[s].y);
          ctx.closePath();
          ctx.fill();

          ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
          ctx.stroke();
        }

        // Draw top face
        ctx.fillStyle = 'rgba(24BB, 191, 36, 0.8)'; // bright gold top highlight
        ctx.fillStyle = 'rgba(251, 191, 36, 0.9)';
        ctx.beginPath();
        ctx.moveTo(rTop[0].x, rTop[0].y);
        rTop.forEach((pt) => ctx.lineTo(pt.x, pt.y));
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });

      // 4. DRAW CENTRAL BALANCE SCALE (The Symbol of Audit & Accuracy)
      // Standard audit balance scale has:
      // - Central stand (base and vertical pillar)
      // - Horizontal crossbar (which tilts responsive to mouse hover)
      // - Two hanging wires and pans (left and right)
      const scalePivot = { x: 60, y: -20, z: 20 }; // pivot point of scale
      const tilt = Math.sin(Date.now() * 0.001) * 0.08 + mouse.x * 0.15; // interactive tilt!

      // Pivot node
      const rPivot = project(rotateX(rotateY(scalePivot, angleY), finalAngleX), w, h);

      // A. Stand / Pillar
      const standBase = { x: 60, y: 110, z: 20 };
      const rStandBase = project(rotateX(rotateY(standBase, angleY), finalAngleX), w, h);

      // Draw stand vertical line
      ctx.strokeStyle = '#D4AF37'; // gold
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(rPivot.x, rPivot.y);
      ctx.lineTo(rStandBase.x, rStandBase.y);
      ctx.stroke();

      // Stand bottom base block
      const basePoints = [
        { x: 20, y: 110, z: -20 },
        { x: 100, y: 110, z: -20 },
        { x: 100, y: 110, z: 60 },
        { x: 20, y: 110, z: 60 },
      ];
      const rBasePoints = basePoints.map((bp) =>
        project(rotateX(rotateY(bp, angleY), finalAngleX), w, h)
      );
      ctx.fillStyle = 'rgba(212, 175, 55, 0.2)';
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(rBasePoints[0].x, rBasePoints[0].y);
      rBasePoints.forEach((pt) => ctx.lineTo(pt.x, pt.y));
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // B. Crossbar (Tilting horizontal line)
      const barLength = 70;
      // End point left
      const leftEnd = {
        x: scalePivot.x - barLength * Math.cos(tilt),
        y: scalePivot.y - barLength * Math.sin(tilt),
        z: scalePivot.z,
      };
      // End point right
      const rightEnd = {
        x: scalePivot.x + barLength * Math.cos(tilt),
        y: scalePivot.y + barLength * Math.sin(tilt),
        z: scalePivot.z,
      };

      const rLeftEnd = project(rotateX(rotateY(leftEnd, angleY), finalAngleX), w, h);
      const rRightEnd = project(rotateX(rotateY(rightEnd, angleY), finalAngleX), w, h);

      // Draw horizontal crossbar
      ctx.strokeStyle = '#D4AF37';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(rLeftEnd.x, rLeftEnd.y);
      ctx.lineTo(rRightEnd.x, rRightEnd.y);
      ctx.stroke();

      // Pivot knob center
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(rPivot.x, rPivot.y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      // C. Left and Right Hanging Pans
      const wireHeight = 50;
      const panRadius = 15;

      const drawHangingPan = (endPt: Point3D, isLeft: boolean) => {
        // Center of the pan
        const panCenter = {
          x: endPt.x,
          y: endPt.y + wireHeight,
          z: endPt.z,
        };

        const rEnd = project(rotateX(rotateY(endPt, angleY), finalAngleX), w, h);
        const rPanCenter = project(rotateX(rotateY(panCenter, angleY), finalAngleX), w, h);

        // Draw left and right wire hangers (forming a V-shape from crossbar end to the pan rim)
        const panRimLeft = { x: panCenter.x - panRadius, y: panCenter.y, z: panCenter.z };
        const panRimRight = { x: panCenter.x + panRadius, y: panCenter.y, z: panCenter.z };

        const rRimL = project(rotateX(rotateY(panRimLeft, angleY), finalAngleX), w, h);
        const rRimR = project(rotateX(rotateY(panRimRight, angleY), finalAngleX), w, h);

        ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(rEnd.x, rEnd.y);
        ctx.lineTo(rRimL.x, rRimL.y);
        ctx.lineTo(rRimR.x, rRimR.y);
        ctx.closePath();
        ctx.stroke();

        // Draw Pan Base (Oval representing 3D circular plate)
        ctx.fillStyle = isLeft ? 'rgba(52, 211, 153, 0.4)' : 'rgba(147, 197, 253, 0.4)'; // subtle green assets vs blue liability highlight
        ctx.strokeStyle = '#D4AF37';
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        // Draw oval representation of 3D disk
        ctx.ellipse(
          rPanCenter.x,
          rPanCenter.y,
          panRadius * rPanCenter.scale,
          (panRadius / 3) * rPanCenter.scale,
          0,
          0,
          Math.PI * 2
        );
        ctx.fill();
        ctx.stroke();

        // Tiny floating values above the scale pans denoting assets vs liabilities matching!
        ctx.font = `${Math.floor(10 * rPanCenter.scale)}px monospace`;
        ctx.fillStyle = '#1d293d';
        ctx.textAlign = 'center';
        ctx.fillText(
          isLeft ? 'DEBIT' : 'CREDIT',
          rPanCenter.x,
          rPanCenter.y + 15
        );
      };

      drawHangingPan(leftEnd, true);
      drawHangingPan(rightEnd, false);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouse.targetX, mouse.targetY, hovered]);

  return (
    <div id="canvas-container" className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background glow effects to enrich 3D */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
      
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[500px] cursor-grab active:cursor-grabbing"
        title="Interactive CA 3D Dashboard - Hover/drag to interact"
      />
      
      {/* Absolute overlay indicator */}
      // <div className="absolute bottom-2 right-4 flex items-center gap-1.5 text-[10px] text-amber-500/60 font-mono tracking-wider uppercase pointer-events-none">
      //   <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
      //   Interactive Ledger Projection
      // </div>
    </div>
  );
}
