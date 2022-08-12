import React from 'react';

const Button = ({children}) => {
      return (
     
             <button className='btn border-0 bg-gradient-to-r from-primary to-secondary text-white uppercase'>{children}</button>
       
      );
};

export default Button;