import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

const Slide3v2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: '100vh'}}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
    <div className='h-full w-full overflow-hidden bg-background box grid lg:grid-cols-2 gap-5 md:gap'>
      <img src="https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="rounded-xl w-full" />
      <div className="flex flex-col rounded-xl px-7 py-9 md:pr-18 bg-foreground text-background text-2xl md:text-3xl" id="about">
        <p ref={aboutRef}>Hi! I'm Adrian Sutansaty, a recent graduate of Informatics Engineering, Sriwijaya University with GPA 3.92.</p>
        <span>
          I have extensive experience in fullstack web development using modern technologies such as React.js, Node.js, and Laravel. Has experience developing Web3 applications, and dApps based on Ethereum Blockchain. Able to work in a team, lead projects, communicate, and think creatively in doing something.
        </span>
      </div>
    </div>
    </motion.div>
  )
}

export default Slide3v2