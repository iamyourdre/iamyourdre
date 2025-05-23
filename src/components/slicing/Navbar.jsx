// filepath: c:\Users\iamyo\Code Box\JS_ENV\iamyourdre.github.io\src\components\slicing\Navbar.jsx
import { Menu, Asterisk, Linkedin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'react-scroll'
// import { gsap } from 'gsap'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

const navLinks = [
  {
    title: 'Me',
    url: 'profile',
  },
  {
    title: 'Portfolio',
    url: 'portfolio',
  },
  {
    title: 'Experience',
    url: 'experience',
  },
  {
    title: 'Certificate',
    url: 'certificate',
  },
];

const Navbar = ({ref}) => {
  
  // useEffect(() => {
  //   gsap.fromTo(ref.current, { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.5 });
  // }, []);

  return (
    <div ref={ref} className="w-full flex md:grid grid-cols-4 gap-3 box fixed top-0 left-0 right-0 z-50 text-foreground items-center invert-text"> 
      <div className="flex gap-3 lg:col-span-1">
        <RouterLink to="/" className='font-[1000] text-2xl flex-1 flex'>
          <span className="font-bold">Dre</span>.
        </RouterLink>
        <Asterisk size={30} className='hover:animate-[spin_1.5s_ease-in-out_infinite] '/>
      </div>
      <div className="hidden flex-1 md:flex pl-5 gap-3 justify-center md:col-span-2">
        {navLinks.map((link, index) => (
          link.url.startsWith('/') ? (
            <RouterLink key={index} to={link.url} className='text-sm font-medium mx-3 cursor-pointer'>{link.title}</RouterLink>
          ) : (
            <Link key={index} to={link.url} smooth={true} duration={500} className='text-sm font-medium mx-3 cursor-pointer'>{link.title}</Link>
          )
        ))}
      </div>
      <div className="flex-1 flex md:flex-none justify-end lg:col-span-1">
        <RouterLink to="https://www.linkedin.com/in/iamyourdre/" target="_blank">
          <Button className="mr-2" variant="ghost"><Linkedin/> LinkedIn</Button>
        </RouterLink>
      </div>
      <div className="md:hidden">
        <Dropdown/>
      </div>
    </div>
  )
}

export function Dropdown() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Button className="flex gap-2">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 border-border box-m mt-2">
        <DropdownMenuGroup>
          {navLinks.map((link, index) => (
            link.url.startsWith('/') ? (
              <RouterLink key={index} to={link.url}>
                <DropdownMenuItem className='text-sm font-medium py-2 cursor-pointer'>{link.title}</DropdownMenuItem>
              </RouterLink>
            ) : (
              <Link key={index} to={link.url} smooth={true} duration={500}>
                <DropdownMenuItem className='text-sm font-medium py-2 cursor-pointer'>{link.title}</DropdownMenuItem>
              </Link>
            )
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar