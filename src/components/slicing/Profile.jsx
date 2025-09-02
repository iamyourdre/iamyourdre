import React, { useEffect, useState, useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { Button } from '../ui/button';
import me1 from '../../assets/me/3x4 Adrian Sutansaty WBG.png'
import me2 from '../../assets/me/solo.jpg'

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
    <div className='h-full w-full overflow-hidden bg-transparent box grid md:grid-cols-2 gap-5 py-20' id='about'>
      <div className="flex flex-col rounded-xl px-7 py-9 md:p-10 bg-foreground text-background text-2xl leading-tight" ref={ref}>
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="relative flex items-center justify-center w-[260px] h-[220px]">
            {/* Base image */}
            <img
              src={me1}
              alt="Adrian profile 1"
              className="absolute w-40 h-40 object-cover rounded-full border-2 border-background shadow-xl translate-x-[-60px]"/>
            {/* Stacked image */}
            <img
              src={me2}
              alt="Adrian profile 2"
              className="absolute w-40 h-40 object-cover rounded-full border-2 border-background shadow-xl translate-x-[60px]"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-xl px-7 py-9 md:p-10 bg-foreground text-background text-xl lg:text-2xl leading-tight" ref={ref}>
        <div className="tracking-tight text-justify" ref={aboutRef} >
        <p>Hi! I'm Adrian Sutansaty,</p>
        <p>a fresh graduate in Informatics Engineering from Sriwijaya University. Experienced in academic projects and internships with React.js, Node.js, Java, .NET, and Web3 technologies. Passionate about crafting seamless user experiences and innovative web solutions.</p>
        <span>
          My approach is built on balance — the harmony between quality and creativity. I believe great products are born when technology and artistry meet halfway. Every line of code I write reflects precision, and every design choice I make embodies creativity, resulting in solutions that are not only functional but also meaningful.
        </span>
        </div>
          <div className="flex items-end h-full mt-20">
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