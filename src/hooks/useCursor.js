import { useEffect, useRef } from 'react';

export function useCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + 'px';
      dot.style.top  = e.clientY + 'px';
    };

    const lerp = (a, b, n) => a + (b - a) * n;

    const animate = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);
      ringEl.style.left = ring.current.x + 'px';
      ringEl.style.top  = ring.current.y + 'px';
      raf.current = requestAnimationFrame(animate);
    };

    const onEnterHover = () => ringEl.classList.add('hover');
    const onLeaveHover = () => ringEl.classList.remove('hover');

    window.addEventListener('mousemove', onMove);
    raf.current = requestAnimationFrame(animate);

    // Hover effect on interactive elements
    const targets = document.querySelectorAll('a, button, .hoverable');
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnterHover);
      el.addEventListener('mouseleave', onLeaveHover);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnterHover);
        el.removeEventListener('mouseleave', onLeaveHover);
      });
    };
  }, []);

  return { dotRef, ringRef };
}
