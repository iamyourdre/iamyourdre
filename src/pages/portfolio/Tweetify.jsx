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
import Markdown from 'react-markdown'


const Tweetify = () => {
  const details = {
    title: 'Tweetify',
    description: `
A social media app with real-time messaging, notifications, post interactions, follow system, and REST API. Built with React.js, Axios, React Router, Socket.IO, and Zustand.


## [Features]

### User Authentication
- **Sign Up**: Users can create an account by providing their full name, username, password, and gender.
- **Login**: Users can log in using their username and password.
- **Logout**: Users can securely log out of their accounts.

### Posts
- **Create Post**: Users can create new posts with text and images.
- **Repost**: Users can repost content from other users.
- **Comment**: Users can comment on posts.
- **Like**: Users can like and unlike posts.
- **Delete Post**: Users can delete their posts along with any child posts.

### Notifications
- **Real-time Notifications**: Users receive real-time notifications for likes, comments, reposts, and follows.
- **Mark as Read**: Users can mark notifications as read.

### Messaging
- **Real-time Messaging**: Users can send and receive messages in real-time.
- **Conversations**: Users can view their conversations with other users.

### Follow System
- **Follow/Unfollow**: Users can follow and unfollow other users.
- **Followers/Following**: Users can view their followers and the users they are following.

## [Tech Stack]

### Frontend
- **React**: Used for building the user interface.
- **Zustand**: State management library for managing global state.
- **React Router**: For handling routing in the application.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Socket.io-client**: For real-time communication with the backend.
- **Axios**: For making HTTP requests to the backend.

### Backend
- **Node.js**: Runtime environment for executing JavaScript on the server.
- **Express.js**: Web framework for building the backend API.
- **MongoDB**: NoSQL database for storing user data, posts, messages, and notifications.
- **Mongoose**: ODM library for MongoDB.
- **Socket.io**: For real-time communication between the server and clients.
- **JWT**: For secure authentication using JSON Web Tokens.
- **Multer**: Middleware for handling file uploads.

### DevOps
- **Nodemon**: For automatically restarting the server during development.
- **dotenv**: For managing environment variables.

## [Conclusion]
Building this Twitter wannabe app was an incredible learning experience. I gained a deeper understanding of full-stack development, real-time communication, and state management. The project also highlighted the importance of a well-structured codebase and efficient state management. I'm excited to continue improving this app and exploring new features and technologies.
    `,
    frontend: ['React.js', 'Zustand', 'React Router', 'Tailwind CSS', 'Socket.IO', 'Axios'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'Socket.io', 'JWT', 'Multer'],
    images: [_1, _2, _2_2, _3, _4, _5, _6],
    tags: ['Frontend', 'Backend'],
    link: 'https://github.com/iamyourdre/tweetify'
  }
  return (
    <div className='mt-16'>
      <div className=" grid grid-cols-1 lg:grid-cols-3 box lg:pl-20 gap-6">
        <div className="col-span-1 flex">
          <div className="">
            <Link className='hidden lg:flex absolute left-0 top-1/2 transform -translate-x-1/3 z-10' to={details.link}>
              <Button className='rounded-none rotate-90' size={'xl'}><Github/>GitHub</Button>
            </Link>
          </div>
          <div className="">
            <Carousel className='relative'>
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
        </div>
        <div className="col-span-1 lg:col-span-2 lg:box-m box border border-muted rounded-2xl">
          <div className="flex flex-col gap-3">
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
      </div>
    </div>
  )
}

export default Tweetify