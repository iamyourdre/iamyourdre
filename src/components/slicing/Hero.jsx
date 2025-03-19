import React, { useEffect, useRef, useState } from 'react'
import { Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import * as THREE from 'three'
import HALO from 'vanta/dist/vanta.halo.min'

const Hero = () => {
  const vantaRef = useRef(null)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    // const vantaEffect = HALO({
    //   el: vantaRef.current,
    //   mouseControls: true,
    //   touchControls: true,
    //   gyroControls: true,
    //   minHeight: 200,
    //   minWidth: 200,
    //   amplitudeFactor: 8,
    //   shininess: 50,
    //   xOffset: 0.5,
    //   yOffset: 0.5,
    //   size: 2,
    //   THREE: THREE
    // })
  
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
      // if (vantaEffect) vantaEffect.destroy()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
    <div ref={vantaRef} className='fixed min-h-screen w-full overflow-x-hidden' style={{ opacity }}>
      <div className="min-h-screen flex md:0 flex-col-reverse md:grid md:grid-cols-4 md:gap-10 box bg-background/60 md:bg-transparent ">

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

        <div className='flex flex-1 col-span-3 flex-col md:box justify-center md:justify-end gap-14 md:gap-18 lg:gap-20'>
          <div className="flex flex-col gap-6 pt-36 md:pt-0">
            <h1 className='h1-dre font-black'>
              Hello, <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-fuchsia-400'>World!</span><br />
              I'm Adrian Sutansaty.
            </h1>
            <div className="flex gap-2">
              <Button size='lg' onClick={handleDiveDown}> Dive Down</Button>
              <Button size='lg' variant='ghost' className='bg-foreground/20 text-foreground backdrop-blur-xl'>Download CV</Button>
            </div>
          </div>
          <div className="h3-dre flex flex-col gap-8">
            <div className="grid lg:grid-cols-3">
              <div className="text-muted-foreground col-span-2 text-justify">
                A recent graduate of <span className='text-foreground'>Informatics Engineering</span> with strong passion in <span className='text-foreground'>Web Development</span>. Having strong experience on <span className='text-foreground'>Web3, and crypto culture</span>. Able to work in a team, lead projects, communicate, and think creatively in doing something. Let's connect!
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