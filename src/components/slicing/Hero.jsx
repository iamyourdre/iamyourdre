import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpLeft, Asterisk, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'
import { gsap } from 'gsap'
import asterisksvg from '@/assets/asterisk.svg'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const vantaRef = useRef(null)
  const h1_1 = useRef(null)
  const h1_2 = useRef(null)
  const hardSkillsRefs = useRef([])
  const softSkillsRefs = useRef([])
  const buttonRef = useRef(null)
  const aboutRef = useRef(null)
  const [opacity, setOpacity] = useState(1)
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' }))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit' }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = window.innerHeight
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0)
      setOpacity(newOpacity)

      const translateY = Math.min(scrollTop / 2, maxScroll / 2)
      vantaRef.current.style.transform = `translateY(-${translateY}px)`
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    gsap.fromTo(h1_1.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
    gsap.fromTo(h1_2.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 });

    hardSkillsRefs.current.forEach((ref, index) => {
      gsap.fromTo(ref, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: index * 0.2 });
    });

    softSkillsRefs.current.forEach((ref, index) => {
      gsap.fromTo(ref, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: index * 0.2 });
    });

    gsap.fromTo(buttonRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
    gsap.fromTo(aboutRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1.2 });
  }, []);

  const handleDiveDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  const hardSkills = [
    'Frontend', 'Backend', 'Graphic', 'UIUX', 'Web3'
  ]
  const softSkills = [
    'Perfectionist', 'Team Player', 'Creative', 
  ]
  const contact = [
    {
      icon: <Linkedin size={15} />,
      link: 'https://www.linkedin.com/in/iamyourdre/'
    },
    {
      icon: <Mail size={15} />,
      link: 'mailto:adriansutansaty260403@gmail.com'
    },
  ]

  return (
    <div
      ref={vantaRef}
      className='fixed min-h-screen w-full overflow-hidden'
      style={{
        opacity: opacity,
        backgroundImage: `url('https://images.unsplash.com/photo-1590907047706-ee9c08cf3189?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='font-[1000] text-[15rem] md:text-[30rem] absolute w-max z-0 pointer-events-none opacity-5 justify-center items-center flex transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
        <span className='opacity-70'>{time}</span>
      </div>
      <div className="min-h-screen flex md:0 flex-col-reverse md:grid md:grid-cols-4 md:gap-10 box">

        <div className='md:col-span-1 hidden md:flex justify-left items-center text-sm text-muted-foreground font-semibold'>
          <div className="flex gap-6">
            <div>
              {hardSkills.map((skill, index) => (
                <p key={index} ref={el => hardSkillsRefs.current[index] = el}>{skill}</p>
              ))}
            </div>
            <div>
              {softSkills.map((skill, index) => (
                <p key={index} ref={el => softSkillsRefs.current[index] = el}>{skill}</p>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-1 col-span-3 flex-col md:box justify-center md:justify-end gap-14 md:gap-18 lg:gap-20'>
          <div className="flex flex-col gap-6 pt-36 md:pt-0">
            <h1 className='h1-dre font-black'>
              <p ref={h1_1} className='flex'>Behind&nbsp;<span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-fuchsia-400'>{'{'}</span>
              <TypeAnimation
                sequence={[
                  '',
                  1000,
                  'Code',
                  2000,
                  'Coffee',
                  500,
                ]}
                wrapper="span"
                speed={200}
                cursor={false}
                repeat={Infinity}
              />
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-fuchsia-400'>{'}'}</span></p>
              <p ref={h1_2}><span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-fuchsia-400'>&</span> Creativity.</p>
            </h1>
            <div className="flex gap-2" ref={buttonRef}>
              <Button size='lg' onClick={handleDiveDown}> Dive Down</Button>
              <Link to={contact[0].link} target='_blank'>
                <Button size='lg' variant='ghost' className='bg-foreground/20 text-foreground backdrop-blur-xl'><Linkedin />LinkedIn</Button>
              </Link>
            </div>
          </div>
          <div className="h3-dre flex flex-col gap-8">
            <div className="grid lg:grid-cols-3">
              <div className="text-muted-foreground col-span-2 text-justify" ref={aboutRef}>
                Hi! Welcome to my <span className='text-foreground'>Portfolio</span>. My name is Adrian and i have strong passion in <span className='text-foreground'>Web Development</span>. In this page, let me presenting <span className='text-foreground'>my projects</span>, <span className='text-foreground'>skills</span>, and <span className='text-foreground'>experiences</span>. I'll be happy to work with you. So, let's dive down and get to know each other!
              </div>
            </div>
            <div className="flex gap-4 col-span-1 justify-start items-start">
              {contact.map((item, index) => (
                <Link key={index} to={item.link} className="flex gap-2 items-center">
                  <button className="p-2 rounded-full bg-foreground/10 text-muted-foreground">
                    {item.icon}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero