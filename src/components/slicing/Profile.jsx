import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Button } from '../ui/button';
import Divider from '../Divider';
import me from '../../assets/me/3x4 Adrian Sutansaty WBG.png'

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
        className="rounded-xl aspect-1/1 w-full bg-cover bg-center" 
        style={{ backgroundImage:
          `url(${me})`
         }}
      />
      <div className="flex flex-col rounded-xl px-7 py-9 md:pr-18 bg-foreground text-background text-2xl md:text-3xl leading-tight" ref={ref}>
        <div className="" ref={aboutRef} >
          <p>Hi! I'm Adrian Sutansaty,</p>
          <p>a recent graduate of Informatics Engineering, Sriwijaya University.</p>
          <span>
            I am a JavaScript fullstack developer specializing in Next.js and modern web technologies. I also have experience building Web3 dApps and DeFi solutions on the Ethereum blockchain.
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