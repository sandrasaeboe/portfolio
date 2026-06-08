import { useRef, useEffect, useState } from 'react';
export default function useInView(t = 0.1) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } }, { threshold: t });
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, [t]);
  return [ref, v];
}
