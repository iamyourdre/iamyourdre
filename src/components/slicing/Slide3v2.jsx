import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Button } from '../ui/button';

const Slide3v2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });
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
    } else {
      gsap.fromTo(aboutRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: 50, duration: 1 });
    }
  }, [inView]);

  return (
    <div className='h-full w-full overflow-hidden bg-background box grid lg:grid-cols-2 gap-5' ref={ref} id='about'>
      <img src="https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="rounded-xl w-full" />
      <div ref={aboutRef} className="flex flex-col rounded-xl px-7 py-9 md:pr-18 bg-foreground text-background text-2xl md:text-3xl opacity-0 leading-tight">
        <p>Hi! I'm Adrian Sutansaty, a recent graduate of Informatics Engineering, Sriwijaya University with GPA 3.92.</p>
        <span>
          I have experience in fullstack web development using modern technologies such as React.js, Node.js, and Laravel. I also have experience developing Web3 dApps or DeFi based on Ethereum Blockchain.
        </span>
        <div className="flex items-end h-full">
          <Button className="mt-5 bg-foreground border" size={'lg'}>My Portfolio</Button>
        </div>
      </div>
    </div>
  )
}

export default Slide3v2