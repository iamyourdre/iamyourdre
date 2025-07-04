import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import _1 from '@/assets/portofolio/blockpilot/preview.png'
import Divider from '@/components/Divider'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const Blockpilot = () => {
  const details = {
    title: 'Blockpilot UI',
    description: `
A landing page designed for Blockpilot, maximizing user engagement with a modern, responsive layout and smooth animations. The page features a clean design, intuitive navigation, and visually appealing elements to enhance the user experience.

## Technologies Used

- **Next.js**: React framework for modern web application development.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **GSAP**: Animation library for creating smooth transitions and effects.
    `,
    image: _1,
    frontend: ['Next.js', 'Tailwind CSS', 'GSAP'],
    link: 'https://blockpilot-ui.vercel.app/',
  }
  return (
    <div className='mt-16'>
      <div className=" grid grid-cols-1 lg:grid-cols-5 box gap-6 place-content-start">
        <div className="col-span-1">
          <div className="">
            <Link className='hidden lg:flex absolute left-0 top-1/2 transform -translate-x-1/3 z-10' to={details.link}>
              <Button className='rounded-none rotate-90' size={'xl'}><ArrowUpRight/>Visit Demo</Button>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          <div className="">
            <img src={details.image} alt="tweetify" className="w-full rounded-2xl" />
          </div>
          <div className="lg:box-m box border border-muted rounded-2xl flex flex-col gap-3">
            <h1 className='font-bold h1'>
              {details.title}
            </h1>
            <div className="text-muted-foreground markdown">
              <Markdown>{details.description}</Markdown>
            </div>
            <Link to={details.link} className='flex'>
              <Button className='mt-4 flex-1' size='lg'><ArrowUpRight/>Visit Demo</Button>
            </Link>
            <Divider/>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                <Badge className='border-muted rounded-full flex-none'>Frontend</Badge>
                {details.frontend.map((item, index) => (
                  <Badge key={index} variant="outline" className='border-muted text-muted-foreground rounded-full'>{item}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
        </div>
      </div>
    </div>
  )
}
export default Blockpilot