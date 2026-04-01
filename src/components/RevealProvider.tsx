'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px', // Trigger slightly before it comes into view
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-up');
    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
      observer.disconnect();
    };
  }, [pathname]); // Re-run when route changes

  return null;
}
