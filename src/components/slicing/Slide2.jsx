import React from 'react'
import { motion } from 'framer-motion';

const Slide2 = () => {
  return (
    <motion.div
      initial={{ y: '100vh'}}
      animate={{ y: 0 }}
      transition={{ type: "inertia"}}
      className='w-full overflow-hidden bg-background box flex flex-col pt-10 gap-2'
      id='slide2'
    >
      <div className="text-3xl lg:text-6xl font-light text-muted leading-6 lg:leading-12 font-monument">
        <h1>BACHELOR OF</h1>
        <h1>COMPUTER.SCIENCE</h1>
      </div>
      <div className="text-3xl lg:text-6xl font-light text-right leading-6 lg:leading-12 font-monument">
        <h1>SRIWIJAYA</h1>
        <h1>UNIVERSITY</h1>
      </div>
      <div className="text-sm font-light grid grid-cols-2 border-t border-muted mt-2 lg:mt-6 pt-2 lg:pt-6">
        <h1>2020 - 2024</h1>
        <h1 className='text-right'>GPA 3.98 / 4.00</h1>
      </div>
    </motion.div>
  )
}

export default Slide2