import React from 'react';
import profile3 from '../../../images/profile3.png'
import Button from '../../Shared/Button/Button';
const Banner = () => {
      return (
            <div
              className="hero lg:min-h-screen  md:min-h-screen"
               style={{background:`url(${profile3})`,backgroundRepeat:'no-repeat',backgroundPosition:'center',height:'500px'}} >

            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md mt-4 ">
                <h1 className="mb-1 text-3xl font-bold ">I Design & Build </h1>
                <h1 className="mb-1 text-3xl font-bold">Creative Products </h1>
                <button className='btn bg-inherit font-bold border-primary border-2 hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white hover:border-0 '>Get Touch</button>
              </div>
            </div>
          </div>
      );
};

export default Banner;