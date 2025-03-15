import React from 'react'
import { motion } from 'framer-motion';

const Slide2 = () => {
  return (
    <motion.div
      initial={{ y: '100vh'}}
      animate={{ y: 0 }}
      transition={{ type: "inertia"}}
      className='h-screen w-full overflow-hidden bg-red-800'
      id='slide2'
    >
      Slide2
    </motion.div>
  )
}

export default Slide2