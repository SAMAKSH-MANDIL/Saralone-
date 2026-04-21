"use client";

import * as React from "react";

export function CursorGlow() {
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x - 240}px, ${y - 240}px, 0)`;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[480px] w-[480px] rounded-full opacity-70 blur-3xl"
      style={{
        background:
          "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.22), transparent 55%), radial-gradient(circle at 60% 60%, rgba(168,85,247,0.18), transparent 55%), radial-gradient(circle at 50% 50%, rgba(99,102,241,0.16), transparent 60%)",
      }}
    />
  );
}

