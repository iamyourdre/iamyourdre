import React from 'react'
import coverBest from '../../assets/cover_best.jpg'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Best = () => {
  return (
    <div id='best' className='m-4 relative text-neutral-100 group'>
      <img src={coverBest} alt="Tweetify | Preview" className='rounded-2xl' />
      <div className="overlay absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-transparent to-40% bg-opacity-50 flex flex-row opacity-100 rounded-2xl p-6">
        <div className="flex-1">
          <h2 className='text-xs md:text-sm font-light'>BEST PROJECT</h2>
          <h1 className='text-md md:text-2xl font-medium '>Tweetify - A Twitter-Like App</h1>
        </div>
        <Link to="https://www.linkedin.com/posts/iamyourdre_i-learned-to-create-tweetify-a-twitter-like-activity-7302222568059506688-Vni_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4eD28BsjQOFvXLB-4-KjcKeszGE1j38aM" target='_blank'>
          <Button size="lg" variant="outline" className="bg-transparent">View Articles</Button>
        </Link>
      </div>
    </div>
  )
}

export default Best