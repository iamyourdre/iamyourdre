import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Button } from '../ui/button';
import Divider from '../Divider';

const Profile = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5, 
  });
  const aboutRef = useRef(null);
  
  const handleDiveDown = () => {
    window.scrollTo({
      top: window.innerHeight * 2,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    if (inView) {
      gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    } else {
      gsap.fromTo(aboutRef.current, { opacity: 1, y: 0 }, { opacity: 0, y: 50, duration: 1 });
    }
  }, [inView]);

  return (
    <div className='h-full w-full overflow-hidden bg-transparent box grid lg:grid-cols-2 gap-5 py-20' id='about'>
      <div
        className="rounded-xl min-h-[30rem] w-full bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      />
      <div className="flex flex-col rounded-xl px-7 py-9 md:pr-18 bg-foreground text-background text-2xl md:text-3xl leading-tight" ref={ref}>
        <div className="" ref={aboutRef} >
          <p>Hi! I'm Adrian Sutansaty,</p>
          <p>a recent graduate of Informatics Engineering, Sriwijaya University.</p>
          <span>
            I have experience in fullstack dev using modern tech stack such as React.js, Node.js, and Laravel. I also have experience developing Web3 dApps or DeFi based on Ethereum Blockchain.
          </span>
        </div>
          <div className="flex items-end h-full mt-30">
            <Button className="
              bg-foreground border
              rounded-full
              hover:bg-background hover:text-foreground
              transition duration-300 ease-in-out
            " size={'lg'} onClick={handleDiveDown}>My Portfolio</Button>
          </div>
      </div>
    </div>
  )
}

export default Profile