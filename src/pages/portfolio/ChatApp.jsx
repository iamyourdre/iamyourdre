import React from 'react'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import _1 from '@/assets/portofolio/chatapp/1.png'
import _2 from '@/assets/portofolio/chatapp/2.png'
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


const ChatApp = () => {
  const details = {
    title: 'React Chat App',
    description: `
The React Chat App is a real-time messaging application that allows users to send and receive messages instantly. It features a secure login and registration system, ensuring user authentication and privacy.


## Project Features

- **Real-time Messaging**: Send and receive messages in real-time.
- **User Authentication**: Secure login and registration system.

## Technologies Used

- **MongoDB**: NoSQL database for storing chat data.
- **Express.js**: Web framework for Node.js.
- **React**: Frontend library for building user interfaces.
- **Node.js**: Backend runtime environment.
- **Socket.io**: Real-time communication support.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **JWT**: JSON Web Tokens for secure authentication.
    `,
    images: [_1, _2],
    frontend: ['React.js', 'Socket.IO', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.io', 'JWT'],
    link: 'https://github.com/iamyourdre/react-chatapp'
  }
  return (
    <div className='mt-16'>
      <div className=" grid grid-cols-1 lg:grid-cols-5 box gap-6 place-content-start">
        <div className="col-span-1">
          <div className="">
            <Link className='hidden lg:flex absolute left-0 top-1/2 transform -translate-x-1/3 z-10' to={details.link}>
              <Button className='rounded-none rotate-90' size={'xl'}><Github/>GitHub</Button>
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
              <Button className='mt-4 flex-1' size='lg'><Github/> Check on GitHub</Button>
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
export default ChatApp