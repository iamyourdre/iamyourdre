import Navbar from '@/components/slicing/Navbar';
import React from 'react';

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="z-0">
        {children}
      </div>
    </div>
  );
}

export default Main;