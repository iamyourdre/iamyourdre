import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import _1 from '@/assets/portofolio/liqee/1.png'
import _2 from '@/assets/portofolio/liqee/2.png'
import _3 from '@/assets/portofolio/liqee/3.png'
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


const Liqee = () => {
  const details = {
    title: 'Liqee | Social Media Services',
    description: `
Liqee is an innovative platform that provides instant and easy services for purchasing Likes and Followers. Users can select the desired service, make payments via QRIS, and orders will be processed immediately without the need for registration or topping up a balance first.

## Main Features

- **No Registration**: Users do not need to create an account or log in to place an order.
- **Instant Payment**: Supports direct payment via QRIS.
- **Fast & Automatic Processing**: Orders are processed automatically and instantly after payment is received.
- **Simple Interface**: User-friendly design makes it easy for users to select services.

## Technologies Used

- **Next.js**: React framework for modern web application development.
- **Tailwind CSS**: Utility-first CSS framework for responsive styling.
- **Zustand**: Simple and efficient state management for React.
- **Axios**: HTTP client for backend communication.
- **MongoDB**: NoSQL database for storing services and transaction data.
- **JWT**: JSON Web Token for API authentication and security.
    `,
    images: [_1, _2, _3],
    frontend: ['Next.js', 'Tailwind CSS', 'Zustand', 'Axios'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
    link: 'https://liqee.social/',
  }
  return (
    <div className='mt-16'>
      <div className=" grid grid-cols-1 lg:grid-cols-5 box gap-6 place-content-start">
        <div className="col-span-1">
          <div className="">
            <Link className='hidden lg:flex absolute left-0 top-1/2 transform -translate-x-1/3 z-10' to={details.link}>
              <Button className='rounded-none rotate-90' size={'xl'}><ArrowUpRight/>Visit Website</Button>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          <div className="">
            <Carousel className='relative'>
              <CarouselContent>
                {details.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} alt="tweetify" className="w-full" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="">
                <CarouselPrevious className='left-0 ml-2'/>
                <CarouselNext className='right-0 mr-2'/>
              </div>
            </Carousel>
          </div>
          <div className="lg:box-m box border border-muted rounded-2xl flex flex-col gap-3">
            <h1 className='font-bold h1'>
              {details.title}
            </h1>
            <div className="text-muted-foreground markdown">
              <Markdown>{details.description}</Markdown>
            </div>
            <Link to={details.link} className='flex'>
              <Button className='mt-4 flex-1' size='lg'><ArrowUpRight/>Visit Website</Button>
            </Link>
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
        <div className="col-span-1">
        </div>
      </div>
    </div>
  )
}
export default Liqee