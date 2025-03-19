import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '@/components/slicing/Hero';
// import Intro from '@/components/slicing/Intro';
import Profile from '@/components/slicing/Profile';
import Portfolio from '@/components/slicing/Portfolio';

const Index = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya dijalankan sekali
    threshold: 0.5, // Persentase komponen yang harus terlihat sebelum animasi dijalankan
  });

  return (
    <div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Hero />
      </motion.div>


      <motion.div
        initial={{ y: '100vh'}}
        animate={{ y: 0 }}
        transition={{ type: "inertia"}}
        className=''
      >
        {/* <Intro /> */}
        <Profile/>
        <Portfolio/>
      </motion.div>
    </div>
  )
}

export default Index