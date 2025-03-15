import React, { useEffect, useRef, useState } from 'react'
import { ChevronsDown, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'
import { TypeAnimation } from 'react-type-animation';

const Slide1 = () => {
  const vantaRef = useRef(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const vantaEffect = HALO({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200,
      minWidth: 200,
      amplitudeFactor: 8,
      shininess: 50,
      xOffset: 0.5,
      yOffset: 0.5,
      size: 2,
      THREE: THREE
    })
  
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const maxScroll = window.innerHeight
      const newOpacity = Math.max(1 - scrollTop / maxScroll, 0)
      setOpacity(newOpacity)
  
      // Calculate the new transform value
      const translateY = Math.min(scrollTop / 2, maxScroll / 2)
      vantaRef.current.style.transform = `translateY(-${translateY}px)`
    }
  
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      if (vantaEffect) vantaEffect.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    <div ref={vantaRef} className='fixed h-screen w-full overflow-x-hidden' style={{ opacity }}>
      <div className="h-screen flex md:0 flex-col-reverse md:grid md:grid-cols-4 md:gap-10 box bg-background/60 md:bg-transparent">

        <div className='md:col-span-1 hidden md:flex justify-left items-center text-sm text-muted-foreground font-semibold'>
          <div className="flex gap-6">
            <div>
              {hardSkills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
            <div>
              {softSkills.map((skill, index) => (
                <p key={index}>{skill}</p>
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-1 col-span-3 flex-col md:box justify-center md:justify-end gap-14 md:gap-18'>
          <div className="flex flex-col gap-6">
            <h1 className='text-6xl lg:text-7xl font-medium'>
              Hello, World!<br />
              <TypeAnimation
                sequence={[
                  "I'm Adrian Sutansaty",
                  2000,
                  "I'm Web Developer",
                  2000,
                  "I'm Web3 Learner",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />.     
            </h1>
            <div className="flex gap-2">
              <Button size='lg'> Dive Down <ChevronsDown /></Button>
              <Button size='lg' variant='ghost' className='bg-foreground/20 text-foreground backdrop-blur-xl'>Download CV</Button>
            </div>
          </div>
          <div className="text-sm flex flex-col gap-8">
            <div className="text-sm text-muted-foreground col-span-2 text-justify">
              A recent graduate of <span className='text-foreground'>Informatics Engineering</span> with strong passion in <span className='text-foreground'>Web Dev, specializing in Javascript and modern frameworks like React.js, Express.js, etc</span>. Having strong experience on <span className='text-foreground'>Web3, and crypto culture</span>. Experienced in leadership roles within projects and student organizations,. Motivated to contribute in an innovative and dynamic environment.
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

export default Slide1