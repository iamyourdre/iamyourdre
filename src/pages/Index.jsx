import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slide1 from '@/components/slicing/Slide1';
import Slide2 from '@/components/slicing/Slide2';
import Slide3 from '@/components/slicing/Slide3';
import Slide3v2 from '@/components/slicing/Slide3v2';

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
        <Slide1 />
      </motion.div>


      <motion.div
        initial={{ y: '100vh'}}
        animate={{ y: 0 }}
        transition={{ type: "inertia"}}
        className=''
      >
        <Slide2 />
        <Slide3v2/>
      </motion.div>
    </div>
  )
}

export default Index