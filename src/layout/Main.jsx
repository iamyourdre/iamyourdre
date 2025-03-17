import Navbar from '@/components/slicing/Navbar';
import React from 'react';
import { ReactLenis, useLenis } from 'lenis/react'

const Main = ({ children }) => {
  return (
    <ReactLenis root>
      <Navbar />
      <div className="z-0">
        {children}
      </div>
    </ReactLenis>
  );
}

export default Main;