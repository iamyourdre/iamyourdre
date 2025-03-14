import { Menu, Asterisk, Linkedin } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

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
    title: 'About Me',
    url: '/me',
  },
  {
    title: 'Experience',
    url: '/exp',
  },
  {
    title: 'Project',
    url: '/project',
  },
];

const Navbar = () => {
  return (
    <div className='fixed w-full box flex lg:grid lg:grid-cols-4 items-center z-10'>
      <div className="flex gap-3 lg:col-span-1">
        <Link to="/" className='font-[1000] text-2xl flex-1 flex'>
          <span className="font-bold">Dre</span>.
        </Link>
        <Asterisk size={30} className='hover:animate-[spin_1.5s_ease-in-out_infinite] '/>
      </div>
      <div className="hidden flex-1 md:flex pl-5 gap-3 justify-center md:col-span-2 items-center">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.url} className='text-sm font-medium mx-3'>{link.title}</Link>
        ))}
      </div>
      <div className="flex flex-1 md:flex-none justify-end lg:col-span-1">
        <Link to="https://www.linkedin.com/in/iamyourdre/">
          <Button className="mr-2" variant="ghost"><Linkedin/> LinkedIn</Button>
        </Link>
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
            <DropdownMenuItem key={index} as={Link} to={link.url} className='text-sm font-medium py-2'>{link.title}</DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar