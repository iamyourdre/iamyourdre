import Navbar from '@/components/slicing/Navbar';
import React, { useEffect, useRef } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';

const Main = ({ children }) => {
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > (window.innerHeight / 2)) {
        gsap.to(navbarRef.current, { y: -100, duration: 0.5 });
      } else {
        gsap.to(navbarRef.current, { y: 0, duration: 0.5 });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ReactLenis root>
      <Navbar ref={navbarRef}/>
      <div className="z-0">
        {children}
      </div>
    </ReactLenis>
  );
}

export default Main;