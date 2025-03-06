import Navbar from './Navbar';
import React from 'react';

const Main = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Main;