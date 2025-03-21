import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Element } from 'react-scroll';
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';
import Navbar from '@/components/slicing/Navbar';
import Hero from '@/components/slicing/Hero';
// import Intro from '@/components/slicing/Intro';
import Profile from '@/components/slicing/Profile';
import Portfolio from '@/components/slicing/Portfolio';
import { Progress } from "@/components/ui/progress";
import Experience from '@/components/slicing/Experience';
import Certificate from '@/components/slicing/Certificate';
import Footer from '@/components/slicing/Footer';

const Index = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
    threshold: 0.5, // Persentase komponen yang harus terlihat sebelum animasi dijalankan
  });

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const navbarRef = useRef(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down
        if (currentScrollY > (window.innerHeight / 2)) {
          gsap.to(navbarRef.current, { y: -100, duration: 0.5 });
        }
      } else {
        // Scrolling up
        gsap.to(navbarRef.current, { y: 0, duration: 0.5 });
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 1; // Smaller increment for smoother animation
      });
    }, 25); // More frequent updates for smoother animation

    return () => clearInterval(interval);
  }, []);

  // if (isLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <Progress value={progress} />
  //     </div>
  //   );
  // }

  return (
    <ReactLenis root>
      <Navbar 
        ref={navbarRef} 
      />
      <div className="z-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: "inertia" }}
          className=''
        >
          {/* <Intro /> */}
          <Element name="profile">
            <Profile />
          </Element>
          <Element name="portfolio">
            <Portfolio />
          </Element>
          <Element name="experience">
            <Experience />
          </Element>
          <Element name="certificate">
            <Certificate />
          </Element>
          <Footer />
        </motion.div>
      </div>
    </ReactLenis>
  );
}

export default Index;