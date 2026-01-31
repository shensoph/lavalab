import { useRef, useState, useEffect } from 'react';
import './FadeInSection.css';

const FadeInSection = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'fade-in-section--visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
