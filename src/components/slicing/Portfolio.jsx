import React from 'react'
import tweetify from '@/assets/portofolio/tweetify/preview.png'
import PortoCard from '../PortoCard'
import { Button } from '../ui/button'
import { Github } from 'lucide-react'

const Portfolio = () => {
  return (
    <div>
    <div className="flex md:0 flex-col-reverse md:grid md:grid-cols-5 md:gap-10">

      <div className='hidden md:col-span-1 md:flex relative'>
        <div className='absolute left-0 top-1/4 transform -translate-x-1/3'>
          <Button className='rounded-none rotate-90' size={'xl'}><Github/>Github</Button>
        </div>
      </div>

      <div className='flex flex-1 col-span-4 flex-col md:box justify-center md:justify-end gap-8 box'>
        <div className="flex flex-col gap-3">
          <h1 className='font-black h1-dre'>
            PORTFOLIO
          </h1>
          <p className="h2-dre text-muted-foreground col-span-2">
            I'm going to show you some of my projects that I've done.
          </p>
        </div>
        <div className="text-sm border border-muted rounded-2xl grid grid-cols-1 md:grid-cols-2 divide-x divide-y divide-muted">
          <PortoCard thumbnail={tweetify} title='Tweetify' tag={['Frontend', 'Backend']} to='/portfolio/tweetify'/>
          <PortoCard thumbnail={tweetify} title='Tweetify' tag={['Frontend', 'Backend']} to='/portfolio/tweetify'/>
          <PortoCard thumbnail={tweetify} title='Tweetify' tag={['Frontend', 'Backend']} to='/portfolio/tweetify'/>
          <PortoCard thumbnail={tweetify} title='Tweetify' tag={['Frontend', 'Backend']} to='/portfolio/tweetify'/>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Portfolio