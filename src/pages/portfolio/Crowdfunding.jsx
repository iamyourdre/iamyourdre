import React from 'react'
import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import _1 from '@/assets/portofolio/crowdfunding/1.png'
import _2 from '@/assets/portofolio/crowdfunding/2.png'
import Divider from '@/components/Divider'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'


const Crowdfunding = () => {
  const details = {
    title: 'Web3 Crowdfunding',
    description: `
A dApps crowdfunding platform built on the Ethereum blockchain. It allows users to create, manage, and contribute to crowdfunding campaigns using smart contracts.

## Demo

The application is deployed on Vercel. You can access the demo [here](https://web3-crowdfunding-dre.vercel.app). Btw, please make sure you are using Testnet Sepolia Network.

## Features
- **Create Campaign**: Users can create a new campaign by providing a title, description, and minimum contribution.
- **Contribute to Campaign**: Users can contribute to a campaign by providing a contribution amount.
- **Track Campaign**: Users can view the details of a campaign, including the total amount raised, the number of contributors, and the manager's address.
- **Request Withdrawal**: Campaign managers can create a withdrawal request to transfer funds from the campaign to a specific address.
    `,
    highlight: ['Web3', 'dApps', 'React.js', 'Tailwind CSS', 'Ethers.js', 'Web3.js', 'Solidity', 'Thirdweb', 'Vercel'],
    images: [_1, _2],
    link: 'https://github.com/iamyourdre/Web3-Crowdfunding-App'
  }
  return (
    <div className='mt-16'>
      <div className=" grid grid-cols-1 lg:grid-cols-5 box gap-6 place-content-start">
        <div className="col-span-1">
          <div className="">
            <Link className='hidden lg:flex absolute left-0 top-1/2 transform -translate-x-1/3 z-10' to={details.link}>
              <Button className='rounded-none rotate-90' size={'xl'}><Github/>Github</Button>
            </Link>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
          <div className="">
            <Carousel className='relative'>
              <CarouselContent>
                {details.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img src={image} alt="tweetify" className="w-full border border-muted rounded-2xl" />
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
              <Button className='mt-4 flex-1' size='lg'><Github/> Check on Github</Button>
            </Link>
            <Divider/>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {details.highlight.map((item, index) => (
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
export default Crowdfunding