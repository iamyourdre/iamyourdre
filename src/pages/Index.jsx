import React from 'react'
import { Github } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slide1 from '@/components/slicing/Slide1';
import Slide2 from '@/components/slicing/Slide2';

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

      <Slide2 />
    </div>
  )
}

export default Index