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

const Navbar = () => {
  return (
    <div className='flex w-full box py-5 px-4 md:px-10 justify-start items-center bg-background/10 backdrop-blur-md'>
      <div className="flex-1 md:flex-none flex gap-3 ">
        <Link to="/" className='font-[1000] text-lg flex-1 md:flex-none flex items-center'>
          <Asterisk size={20} /><span className="font-extrabold">DRE</span>.
        </Link>
      </div>
      <div className="hidden pl-5 md:flex flex-1 gap-3">
        <Link to={'/dev'}>
          <span className="mx-2 text-sm font-medium">
            My Profile
          </span>
        </Link>
        <Link to={'/dev/wnv'}>
          <span className="mx-2 text-sm font-medium">
            Works & Volunteers
          </span>
        </Link>
        <Link to={'/dev/projects'}>
          <span className="mx-2 text-sm font-medium">
            Projects
          </span>
        </Link>
      </div>
      <Link to="https://www.linkedin.com/in/iamyourdre/">
        <Button className="hidden md:flex mr-2" variant="outline"><Linkedin /> LinkedIn</Button>
      </Link>
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
        <Menu size={27} className='hover:text-teal-500 transition duration-200 ease-in-out'/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 border-border mx-8 mt-2">
        <DropdownMenuGroup>
          <DropdownMenuItem>My Profile</DropdownMenuItem>
          <DropdownMenuItem>Works & Volunteers</DropdownMenuItem>
          <DropdownMenuItem>Projects</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar