import React from 'react';
import neaDark from '../assets/nea2.jpg';
import neaLight from '../assets/nea5.jpg';

const Nea = ({ children }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-cover bg-center"  >
        <img src={neaDark} className='h-full w-full object-fill hidden dark:flex  backdrop-blur-md' alt="" /> 
        <img src={neaLight} className='h-full w-full object-cover dark:hidden  backdrop-blur-md' alt="" /> 
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Nea;
