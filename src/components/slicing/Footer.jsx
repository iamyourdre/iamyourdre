import { ArrowUpLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Footer = () => {
  const handleTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div className='box bg-background text-foreground md:h-screen flex flex-row justify-end items-end relative overflow-hidden'>
      <div className='font-black text-[15rem] md:text-[10rem] lg:text-[15rem] md:leading-32 lg:leading-48 absolute w-max z-0 pointer-events-none opacity-5 justify-center items-center flex transform -translate-y-1/2 top-1/2 left-0'>
        <div className="flex flex-col opacity-0 md:opacity-50">
        <span className='box my-0 py-0'>THANK</span>
        <span className='box my-0 py-0'>YOU!</span>
        </div>
      </div>
      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-4 text-xs tracking-wide justify-end items-end">
        <div className="col-span-1">
          ©2025 ADRIAN<br />ALL RIGHTS RESERVED.
        </div>
        <div className="col-span-1 text-right md:text-left">
          CONTACT ME ON <br />
          <Link to='https://www.linkedin.com/in/iamyourdre/' className='animated-link'>LINKEDIN</Link>,&nbsp;
          <Link to='mailto:adriansutansaty260403@gmail.com' className='animated-link'>EMAIL</Link>,&nbsp;
          <Link to='https://www.instagram.com/iamyourdre/' className='animated-link'>INSTAGRAM</Link>
        </div>
        <div className="col-span-2 md:col-span-1 flex justify-end items-end">
          <button onClick={handleTop}>
            <ArrowUpLeft size={50}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer