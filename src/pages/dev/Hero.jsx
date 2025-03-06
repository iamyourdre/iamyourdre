import React from 'react'
import dayjs from 'dayjs'
import { Github } from 'lucide-react';

const Hero = () => {
  const date = dayjs().format('MMM D, YYYY');
  return (
    <div className="flex flex-col items-center justify-center py-14 gap-4">
      <div className="">
        Adrian Sutansaty - {date}
      </div>
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">BEHIND CODE</h1>
      <div className="flex gap-3 items-center pt-2">
        <div className="bg-neutral-800 rounded-full p-2">
        <Github size={20} className='text-neutral-100' />
        </div>
        <span className='md:text-xl font-semibold'>IAMYOURDRE</span>
      </div>
    </div>
  )
}

export default Hero