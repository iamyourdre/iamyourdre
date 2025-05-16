import React, { useEffect, useRef } from 'react'
import tweetify from '@/assets/portofolio/tweetify/preview.png'
import srjk from '@/assets/portofolio/srjk/preview.png'
import ptba from '@/assets/portofolio/ptba/preview.png'
import crowdfunding from '@/assets/portofolio/crowdfunding/preview.png'
import onecloud from '@/assets/portofolio/onecloud/preview.png'
import liqee from '@/assets/portofolio/liqee/preview.png'
import chatapp from '@/assets/portofolio/chatapp/preview.png'
import PortoCard from '../PortoCard'
import { Button } from '../ui/button'
import { Asterisk, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge'
import gsap from 'gsap'
import { useInView } from 'react-intersection-observer'

const Portfolio = () => {
  const title = useRef(null)
  const subtitle = useRef(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6, 
  });

  useEffect(() => {
    if (inView) {
      gsap.fromTo(title.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      gsap.fromTo(subtitle.current, { opacity: 0, y: -30 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    } 
  }, [inView]);

  return (
    <div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-6 md:gap-10 py-16">
        <div className='hidden md:col-span-1 md:flex relative'>
          <Link to={'https://github.com/iamyourdre'} className='absolute left-0 top-1/4 transform -translate-x-1/3'>
            <Button className='rounded-none rotate-90' size={'xl'}><Github/>GitHub</Button>
          </Link>
        </div>

        <div className='flex flex-1 col-span-5 flex-col md:box justify-center md:justify-end gap-8 box'>
          <div className="flex flex-col gap-3" ref={ref}>
            <h1 className='font-semibold h1-dre opacity-0' ref={title}>
              PORTFOLIO.
            </h1>
            <p className="h2-dre text-muted-foreground col-span-2 opacity-0" ref={subtitle}>
              Here are some of my best projects that I have worked on.
            </p>
          </div>
          <div className="text-sm border border-muted rounded-2xl grid grid-cols-1 md:grid-cols-2">
            <PortoCard thumbnail={tweetify} title='Tweetify' tag={['Web Development']} to='/portfolio/tweetify'/>
            <PortoCard thumbnail={srjk} title='SRJK' tag={['ML', 'Data Science']} to='/portfolio/srjk'/>
            <PortoCard thumbnail={ptba} title='PTBA Asset Management' tag={['App Development']} to='/portfolio/ptba'/>
            <PortoCard thumbnail={liqee} title='Liqee | Layanan Sosial Media' tag={['Web Development', 'eCommerce']} to='/portfolio/liqee'/>
            <PortoCard thumbnail={crowdfunding} title='Web3 Crowdfunding' tag={['Web3', 'dApps']} to='/portfolio/crowdfunding'/>
            <PortoCard thumbnail={onecloud} title='OneCloud Dashboard' tag={['UI/UX', 'Web Design']} to='/portfolio/onecloud'/>
            <PortoCard thumbnail={chatapp} title='Chat App' tag={['Web Development']} to='/portfolio/chatapp'/>
            <Link to={'https://github.com/iamyourdre'} className="p-2 md:border-r border-b border-muted even:border-r-0 last:border-b-0 md:nth-last-[2]:border-b-0">
              <div className="h-full flex justify-center items-center gap-2">
                <Button variant='outline' className='w-full h-full' ><Github/><Badge className='bg-foreground'>github.com/iamyourdre</Badge></Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio