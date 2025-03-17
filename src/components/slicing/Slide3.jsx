import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Slide3 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });
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
      ref={ref}
      initial={{ y: '100vh'}}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
    <div className='h-full w-full overflow-hidden bg-background box'>
      <div className="border border-muted rounded-xl h-full p-4 md:grid-cols-2 grid gap-10">
        <img src="https://images.unsplash.com/photo-1529524987368-af489318987c?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" className="rounded-md w-full" />
        <div className="flex flex-col gap-4 justify-center items-start p-6 lg:p-8">
          <div>
            <span className='text-xs md:text-base text-muted-foreground'>(Name)</span>
            <p className='text-2xl md:text-4xl lg:text-6xl'> Adrian Sutansaty,</p>
          </div>
          <div>
            <span className='text-xs md:text-base text-muted-foreground'>(Education)</span>
            <p className='text-2xl md:text-4xl lg:text-6xl'>Sriwijaya University</p>
          </div>
          <span className='flex flex-col text-muted-foreground text-sm md:text-base'>
            <p>Bachelor of Computer Science</p>
            <p>GPA 3.92 / 4.00</p>
            <p>2020-2024</p>
          </span>
          <div className='text-justify text-sm md:text-base'>
            A Recent Graduate of Informatics Engineering, Sriwijaya University with GPA 3.92, has extensive experience in fullstack web development using modern technologies such as React.js, Node.js, and Laravel. Has experience developing Web3 applications, and dApps based on Ethereum Blockchain. Able to work in a team, lead projects, communicate, and think creatively in doing something.
          </div>
        </div>
      </div>

    </div>
    </motion.div>
  )
}

export default Slide3