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
import _1 from '@/assets/portofolio/ptba/1.jpeg'
import _2 from '@/assets/portofolio/ptba/2.jpeg'
import _3 from '@/assets/portofolio/ptba/3.jpeg'
import _4 from '@/assets/portofolio/ptba/4.jpeg'
import _5 from '@/assets/portofolio/ptba/5.jpeg'
import _6 from '@/assets/portofolio/ptba/6.jpeg'
import { Link } from 'react-router-dom'
import Markdown from 'react-markdown'


const PTBA = () => {
  const details = {
    title: 'PTBA Asset Management',
    description: `
### ANDROID-BASED APPLICATION FOR RECORDING SERIAL NUMBERS AND ASSET TAGS AT PT. BUKIT ASAM

Developed an Android-based application for recording serial numbers and asset tags at PT. Bukit Asam to facilitate employees, especially in the warehouse department, in inputting and recording items at PT. Bukit Asam Tanjung Enim.

As a result, this application successfully increased asset recording efficiency by up to 90%, reducing the process time from 1 hour to just 5 minutes.

## INTERNSHIP TEAM MEMBERS:

Adrian Sutansaty ( Fullstack Developer )

Andelle Gianzra Basae ( Frontend Developer )

Annisa Arrayyan ( Software Designer )
## MAIN FEATURES

- **Asset Data Management**: Users can add, edit, and delete assets.
- **OCR Scanner**: Users can use the OCR Scanner to scan Asset Tag and Serial Number labels.
- **Asset Search**: Users can search for assets by name, category, and location.
- **Asset Sorting**: Users can sort the asset list by name, category, and location.
- **Filter by Period**: Users can filter the asset list by period.
- **Export All Assets to CSV**: Users can export all assets to CSV format.
    `,
    images: [_1, _2, _3, _4, _5, _6],
    tags: ['Frontend', 'Backend'],
    link: 'https://github.com/iamyourdre/PTBA-Asset-Management'
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default PTBA