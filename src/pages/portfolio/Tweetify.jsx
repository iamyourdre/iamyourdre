import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import _1 from '@/assets/portofolio/tweetify/1.png'
import _2 from '@/assets/portofolio/tweetify/2.png'
import _2_2 from '@/assets/portofolio/tweetify/2.2.png'
import _3 from '@/assets/portofolio/tweetify/3.png'
import _4 from '@/assets/portofolio/tweetify/4.png'
import _5 from '@/assets/portofolio/tweetify/5.png'
import _6 from '@/assets/portofolio/tweetify/6.png'
import Divider from '@/components/Divider'
import { Link } from 'react-router-dom'


const Tweetify = () => {
  const details = {
    title: 'Tweetify',
    description: 'A social media app with real-time messaging, notifications, post interactions, follow system, and REST API. Built with React.js, Axios, React Router, Socket.IO, and Zustand.',
    frontend: ['React.js', 'Zustand', 'React Router', 'Tailwind CSS', 'Socket.IO', 'Axios'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.io', 'JWT', 'Multer'],
    images: [_1, _2, _2_2, _3, _4, _5, _6],
    tags: ['Frontend', 'Backend'],
    link: 'https://github.com/iamyourdre/tweetify'
  }
  return (
    <div className='mt-16'>
      
      <div className='hidden md:flex absolute left-0 top-1/2 transform -translate-x-1/3'>
        <Button className='rounded-none rotate-90' size={'xl'}><Github/>Github</Button>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-10 box md:pl-20 lg:pl-32 gap-4">
        <div className='col-span-5 md:col-span-2'>
          <Carousel className='w-full relative'>
            <CarouselContent>
              {details.images.map((image, index) => (
                <CarouselItem key={index}>
                  <img src={image} alt="tweetify" className="w-full rounded-2xl" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="">
              <CarouselPrevious className='left-0 ml-2'/>
              <CarouselNext className='right-0 mr-2'/>
            </div>
          </Carousel>
        </div>
        <div className='flex flex-1 col-span-5 md:col-span-3 flex-col pr-20 pt-10 lg:pt-20'>
          <div className="flex flex-col gap-3">
            <h1 className='font-bold h1-dre'>
              {details.title}
            </h1>
            <p className="md:h2-dre text-muted-foreground">
              {details.description}
            </p>
            <Link to={details.link} className='flex'>
              <Button className='mt-4 flex-1' size='lg'><Github/> Check on Github</Button>
            </Link>
          </div>
          <Divider/>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              <Badge className='border-muted rounded-full flex-none'>Frontend</Badge>
              {details.frontend.map((item, index) => (
                <Badge key={index} variant="outline" className='border-muted text-muted-foreground rounded-full'>{item}</Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className='border-muted rounded-full'>Backend</Badge>
              {details.backend.map((item, index) => (
                <Badge key={index} variant="outline" className='border-muted text-muted-foreground rounded-full'>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweetify