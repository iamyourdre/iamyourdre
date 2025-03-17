import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Slide2 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: '100vh'}}
      animate={{ y: 0 }}
      transition={{ type: "inertia"}}
      className='w-full overflow-hidden bg-background box flex flex-col pt-10 gap-2 text-4xl lg:text-8xl leading-7 lg:leading-17.5'
      id='slide2'
    >
      <motion.div
        style={{ x: -scrollY * 0.05 }}
        className="text-muted pl-7"
      >
        <h1>LET'S</h1>
        <h1>_GET.TO</h1>
      </motion.div>
      <motion.div
        style={{ x: scrollY * 0.05 }}
        className="text-right pr-7 font-[1000]"
      >
        <h1>KNOW.ME</h1>
        <h1>BETTER</h1>
      </motion.div>
      {/* <div
        className="text-xs md:text-sm font-light grid grid-cols-2 border-t border-muted py-1 md:my-2 md:py-2 lg:my-6 lg:py-6"
      >
        <h1>2020 - 2024</h1>
        <h1 className='text-right'>GPA 3.98 / 4.00</h1>
      </div> */}
    </motion.div>
  )
}

export default Slide2