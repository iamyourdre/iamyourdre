import { House, Menu, PlusCircle, Eye, Info, DollarSign, Trash2, Clock, CircleDollarSign, BadgeDollarSign, HandCoins, PlusCircleIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'

const menuItems = [
  { to: '/campaign', icon: <BadgeDollarSign />, label: 'Campaign' },
]

const Navbar = () => {
  return (
    <div className='flex w-full box py-5 px-10 justify-start items-center bg-background/10 backdrop-blur-md'>
      <div className="flex-1 md:flex-none flex gap-3 ">
        <div className="md:hidden">
          <Dropdown/>
        </div>
        <Link to="/" className='font-[1000] text-lg flex-1 md:flex-none'><span className="font-extrabold">DRE</span>.
        </Link>
      </div>
      <div className="hidden pl-5 md:flex flex-1 gap-3">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <span className="mx-2 text-sm font-medium">
              {item.label}
            </span>
          </Link>
        ))}
        <Link to={'/campaign/create'}>
          <span className="mx-2 text-sm font-medium">
            Create Campaign
          </span>
        </Link>
      </div>
      CTA
    </div>
  )
}

export function Dropdown() {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger asChild>
        <Menu size={27}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52 border-border box-m mt-5">
        <DropdownMenuLabel>
          <span className="text-muted-foreground">Welcome!</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {menuItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <DropdownMenuItem className="my-1.5">
              {item.icon} {item.label}
            </DropdownMenuItem>
          </Link>
        ))}
        {/* <DropdownMenuSeparator /> */}
        <Link to={'/new-campaign'}>
          <DropdownMenuItem className="w-full justify-start bg-zinc-50 text-background">
            <PlusCircleIcon /> Create Campaign
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Navbar