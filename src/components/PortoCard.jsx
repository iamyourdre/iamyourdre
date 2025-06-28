import { Asterisk } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Badge } from "@/components/ui/badge"
import { Button } from './ui/button'

const PortoCard = ({thumbnail, title, tag, to, className}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left - 5, y: e.clientY - rect.top - 5});
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Link to={to} target='_blank' className="p-4 md:border-r border-b border-muted even:border-r-0 last:border-b-0 md:nth-last-[2]:border-b-0">
      <div 
        className="flex relative"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={thumbnail} alt="" className=' w-full rounded-xl transition duration-300 ease-in-out hover:cursor-none'/>

        {isHovered && (
          <div 
            className="absolute pointer-events-none"
            style={{ top: mousePosition.y, left: mousePosition.x }}
          >
          <Button className="
            bg-foreground
            shadow-lg
            rounded-full
          " size={'lg'}>View Details</Button>
          </div>
        )}

      </div>
      <div className="flex pt-4">
        <div className="font-light flex items-center gap-2 flex-1">
          <Asterisk size={23}/>{title}
        </div>
        <div className="font-light">
          {tag.map((item, index) => (
            <Badge key={index} variant="outline" className='border-muted text-muted-foreground rounded-full'>{item}</Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default PortoCard