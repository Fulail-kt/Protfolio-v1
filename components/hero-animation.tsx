"use client";

import { useEffect, useRef, useState } from "react";

const NODES = [
  { label: "Next.js",      cat: "Frontend"   },
  { label: "TypeScript",   cat: "Frontend"   },
  { label: "React",        cat: "Frontend"   },
  { label: "Tailwind CSS", cat: "Frontend"   },
  { label: "Zustand",      cat: "Frontend"   },
  { label: "Node.js",      cat: "Backend"    },
  { label: "FastAPI",      cat: "Backend"    },
  { label: "tRPC",         cat: "Backend"    },
  { label: "Socket.IO",    cat: "Real-time"  },
  { label: "PostgreSQL",   cat: "Database"   },
  { label: "Drizzle ORM",  cat: "Database"   },
  { label: "OpenAI API",   cat: "AI"         },
  { label: "n8n",          cat: "Automation" },
  { label: "Clay",         cat: "GTM"        },
  { label: "AWS ECS",      cat: "DevOps"     },
  { label: "Docker",       cat: "DevOps"     },
];

// Which nodes are connected
const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [1, 2], [2, 4],  // Frontend cluster
  [1, 5], [5, 6], [5, 7], [5, 8], [0, 7],  // Backend cluster
  [5, 9], [9, 10],                           // DB
  [6, 11], [11, 12], [12, 13],              // AI / Automation
  [11, 14], [14, 15],                        // DevOps
];

const NR = 11;        // node radius default
const NR_H = 14;      // hovered radius
const ACCENT = "37,99,235";
const REPULSION = 3200;
const SPRING_K = 0.04;
const REST = 105;
const CENTER_K = 0.006;
const DAMP = 0.87;

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [info, setInfo] = useState<{ label: string; cat: string } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    // Alias avoids TypeScript narrowing loss inside nested functions
    const cvs = canvas;

    let rafId = 0;
    let W = 0, H = 0;
    let ctx: CanvasRenderingContext2D;

    // build adjacency once
    const adj: Set<number>[] = NODES.map(() => new Set<number>());
    EDGES.forEach(([a, b]) => { adj[a].add(b); adj[b].add(a); });

    // mutable sim state
    type N = { x: number; y: number; vx: number; vy: number };
    let nodes: N[] = [];
    let hov = -1;
    const active = new Set<number>();
    let drag = -1, dox = 0, doy = 0;
    let prevMx = 0, prevMy = 0;
    let velX = 0, velY = 0;
    const ripples: { ni: number; t: number }[] = [];

    function init(w: number, h: number) {
      W = w; H = h;
      const dpr = window.devicePixelRatio || 1;
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      cvs.style.width = `${w}px`;
      cvs.style.height = `${h}px`;
      ctx = cvs.getContext("2d")!;
      ctx.scale(dpr, dpr);

      const cols = 4;
      nodes = NODES.map((_, i) => ({
        x: 55 + (i % cols) * ((w - 110) / (cols - 1)) + (Math.random() - 0.5) * 25,
        y: 70 + Math.floor(i / cols) * ((h - 140) / (Math.ceil(NODES.length / cols) - 1)) + (Math.random() - 0.5) * 25,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
      }));
    }

    function hitTest(mx: number, my: number) {
      for (let i = nodes.length - 1; i >= 0; i--) {
        const dx = nodes[i].x - mx, dy = nodes[i].y - my;
        if (Math.sqrt(dx * dx + dy * dy) < NR_H + 6) return i;
      }
      return -1;
    }

    function pos(e: MouseEvent) {
      const r = cvs.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    function onMove(e: MouseEvent) {
      const { x, y } = pos(e);
      velX = x - prevMx; velY = y - prevMy;
      prevMx = x; prevMy = y;
      if (drag !== -1) {
        nodes[drag].x = x + dox;
        nodes[drag].y = y + doy;
        nodes[drag].vx = 0; nodes[drag].vy = 0;
        return;
      }
      const h = hitTest(x, y);
      if (h !== hov) {
        hov = h;
        cvs.style.cursor = h !== -1 ? "grab" : "default";
        setInfo(h !== -1 ? { label: NODES[h].label, cat: NODES[h].cat } : null);
      }
    }

    function onDown(e: MouseEvent) {
      const { x, y } = pos(e);
      const h = hitTest(x, y);
      if (h !== -1) {
        drag = h; dox = nodes[h].x - x; doy = nodes[h].y - y;
        nodes[h].vx = 0; nodes[h].vy = 0;
        cvs.style.cursor = "grabbing";
        e.preventDefault();
      }
    }

    function onUp() {
      if (drag !== -1) {
        // throw with velocity
        nodes[drag].vx = velX * 0.6;
        nodes[drag].vy = velY * 0.6;
        drag = -1;
        cvs.style.cursor = hov !== -1 ? "grab" : "default";
      }
    }

    function onClick(e: MouseEvent) {
      const { x, y } = pos(e);
      const h = hitTest(x, y);
      if (h !== -1) {
        if (active.has(h)) { active.delete(h); }
        else { active.add(h); ripples.push({ ni: h, t: 0 }); }
      } else {
        active.clear();
      }
    }

    function onLeave() {
      hov = -1; drag = -1; setInfo(null);
      cvs.style.cursor = "default";
    }

    cvs.addEventListener("mousemove", onMove);
    cvs.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    cvs.addEventListener("click", onClick);
    cvs.addEventListener("mouseleave", onLeave);

    function tick() {
      const cx = W / 2, cy = H / 2;
      const t = Date.now() / 1000;

      // physics
      for (let i = 0; i < nodes.length; i++) {
        if (i === drag) continue;
        let fx = 0, fy = 0;

        // repulsion
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d2 = dx * dx + dy * dy || 1;
          const d = Math.sqrt(d2);
          const f = REPULSION / d2;
          fx += (dx / d) * f; fy += (dy / d) * f;
        }

        // springs
        adj[i].forEach(j => {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d = Math.sqrt(dx * dx + dy * dy) || 1;
          const f = SPRING_K * (d - REST);
          fx += (dx / d) * f; fy += (dy / d) * f;
        });

        // center gravity
        fx += (cx - nodes[i].x) * CENTER_K;
        fy += (cy - nodes[i].y) * CENTER_K;

        nodes[i].vx = (nodes[i].vx + fx) * DAMP;
        nodes[i].vy = (nodes[i].vy + fy) * DAMP;
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;

        // walls
        const m = NR_H + 18; // label headroom
        if (nodes[i].x < m)     { nodes[i].x = m;     nodes[i].vx *= -0.4; }
        if (nodes[i].x > W - m) { nodes[i].x = W - m; nodes[i].vx *= -0.4; }
        if (nodes[i].y < m)     { nodes[i].y = m;     nodes[i].vy *= -0.4; }
        if (nodes[i].y > H - m) { nodes[i].y = H - m; nodes[i].vy *= -0.4; }
      }

      // advance ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].t += 0.032;
        if (ripples[i].t > 1) ripples.splice(i, 1);
      }

      // === RENDER ===
      ctx.clearRect(0, 0, W, H);

      // edges
      EDGES.forEach(([a, b]) => {
        const na = nodes[a], nb = nodes[b];
        const lit = hov === a || hov === b || (active.has(a) && active.has(b));
        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = lit ? `rgba(${ACCENT},0.38)` : "rgba(0,0,0,0.07)";
        ctx.lineWidth = lit ? 1.4 : 0.8;
        ctx.stroke();
      });

      // ripples
      ripples.forEach(r => {
        const rr = NR_H + r.t * 48;
        const op = (1 - r.t) * 0.55;
        ctx.beginPath();
        ctx.arc(nodes[r.ni].x, nodes[r.ni].y, rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ACCENT},${op})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // active pulse rings
      active.forEach(i => {
        const pulse = Math.sin(t * 2.8) * 0.5 + 0.5;
        ctx.beginPath();
        ctx.arc(nodes[i].x, nodes[i].y, NR_H + 6 + pulse * 4, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ACCENT},${0.18 + pulse * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // nodes
      NODES.forEach((_nd, i) => {
        const nd = nodes[i];
        const isH = i === hov;
        const isA = active.has(i);
        const isCon = hov !== -1 && adj[hov].has(i);
        const breathe = 1 + Math.sin(t * 1.6 + i * 0.7) * 0.025;
        const r = (isH ? NR_H : NR) * breathe;

        // glow halo
        if (isH || isA) {
          ctx.beginPath();
          ctx.arc(nd.x, nd.y, r + 12, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ACCENT},0.04)`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(nd.x, nd.y, r + 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ACCENT},0.07)`;
          ctx.fill();
        }

        // circle
        ctx.beginPath();
        ctx.arc(nd.x, nd.y, r, 0, Math.PI * 2);
        ctx.fillStyle = isH || isA
          ? `rgba(${ACCENT},0.09)`
          : "rgba(255,255,255,0.94)";
        ctx.fill();
        ctx.strokeStyle = isH || isA
          ? `rgba(${ACCENT},1)`
          : isCon
          ? `rgba(${ACCENT},0.45)`
          : "rgba(0,0,0,0.13)";
        ctx.lineWidth = isH || isA ? 1.5 : 1;
        ctx.stroke();

        // label
        ctx.font = `10px ui-monospace,'SF Mono',Menlo,monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = isH || isA
          ? `rgba(${ACCENT},1)`
          : isCon
          ? `rgba(${ACCENT},0.6)`
          : "rgba(90,90,90,0.55)";
        ctx.fillText(NODES[i].label, nd.x, nd.y + r + 4);
      });

      rafId = requestAnimationFrame(tick);
    }

    // init via ResizeObserver so it works even if initially hidden
    const ro = new ResizeObserver(entries => {
      const { width, height } = entries[0].contentRect;
      if (width > 0 && height > 0) {
        cancelAnimationFrame(rafId);
        init(width, height);
        rafId = requestAnimationFrame(tick);
      }
    });
    ro.observe(wrap);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafId);
      cvs.removeEventListener("mousemove", onMove);
      cvs.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cvs.removeEventListener("click", onClick);
      cvs.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative w-full h-full select-none">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Hover info */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none">
        <p className="text-[10px] font-mono">
          {info ? (
            <>
              <span style={{ color: "#2563EB" }}>{info.label}</span>
              <span className="text-ink-tertiary/40"> · {info.cat}</span>
            </>
          ) : (
            <span className="text-ink-tertiary/30">drag · click · explore the stack</span>
          )}
        </p>
      </div>

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-white to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </div>
  );
}
