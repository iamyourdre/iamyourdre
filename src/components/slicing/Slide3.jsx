import React from 'react'
import { motion } from 'framer-motion';

const Slide3 = () => {
  return (
    <motion.div
      initial={{ y: '100vh'}}
      animate={{ y: 0 }}
      transition={{ type: "inertia"}}
      className='h-screen w-full overflow-hidden bg-background box pt-20'
      id='slide2'
    >
      <div className="border border-muted rounded-4xl h-full box">
        s
      </div>
    </motion.div>
  )
}

export default Slide3