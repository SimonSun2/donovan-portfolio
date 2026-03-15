import { useEffect, useRef, useState, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 600,
  threshold = 0.1,
  className = '',
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const currentRef = ref.current;
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'opacity-0 translate-y-8';
        case 'down':
          return 'opacity-0 -translate-y-8';
        case 'left':
          return 'opacity-0 translate-x-8';
        case 'right':
          return 'opacity-0 -translate-x-8';
        case 'none':
          return 'opacity-0';
        default:
          return 'opacity-0 translate-y-8';
      }
    }
    return 'opacity-100 translate-y-0 translate-x-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getDirectionClass()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
