import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import _1 from '@/assets/portofolio/nftdrop/1.png'
import _2 from '@/assets/portofolio/nftdrop/2.png'
import _3 from '@/assets/portofolio/nftdrop/3.png'
import _4 from '@/assets/portofolio/nftdrop/4.png'
import Divider from '@/components/Divider'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'


const NFTDrop = () => {
  const details = {
    title: 'DApps NFT Starry Night Edition Drop',
    description: `

DApps NFT Starry Night Edition Drop is a narrative-driven ERC-1155 Drop dApp that lets users discover, preview, and claim limited digital collectibles through an interactive and immersive interface.

**Features**

* Wallet connect, real-time claim button with price & supply.
* Explore grid of NFTs with tilt, animation, and progress indicators.
* NFT details page with preview, description toggle, and claim action.
* Personal collection gallery fetched from on-chain balances.
* Toast lifecycle for smooth feedback (loading → success/error).

**Tech Stack**

* **Frontend**: Next.js (App Router), React (TypeScript), Tailwind CSS, Sonner, Lucide Icons.
* **Web3**: wagmi + viem for contract reads/writes, custom ERC1155 Drop Contract (mint/claim logic).
* **Infra**: Vercel for deployment, IPFS metadata resolution, thirdweb for contract scaffolding.
    `,
    highlight: ['Web3', 'dApps', 'React.js', 'Tailwind CSS', 'Ethers.js', 'Web3.js', 'Solidity', 'Thirdweb', 'Vercel'],
    images: [_1, _2, _3, _4],
    demo: 'https://nft-starry-night.vercel.app/',
    github: 'https://github.com/iamyourdre/DApps-NFT-Starry-Night'
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
              <Button className='mt-4 flex-1' size='lg'><Github/> Check on GitHub</Button>
            </Link>
            <Link to={details.demo} className='flex'>
              <Button className='flex-1' size='lg'><ArrowUpRight/>Visit Demo</Button>
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
export default NFTDrop