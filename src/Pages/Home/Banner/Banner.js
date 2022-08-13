import React from 'react';
import { Link } from 'react-router-dom';
import profile3 from '../../../images/profile3.png'
import profile4 from '../../../images/profile4.png'
import binnary from '../../../images/binnary.jpg'




const Banner = () => {
  return (

    <div>

      <div
        className="hero lg:min-h-screen  md:min-h-screen drawer"
        style={{ background: `url(${profile3})`, backgroundRepeat:'no-repeat', backgroundPosition: 'center', height: '550px' }} >

        <div class="drawer">
          <input id="my-drawer" type="checkbox" class="drawer-toggle" />
          <div class="drawer-content ">


          </div>
          <div class="drawer-side">
            <label for="my-drawer" class="drawer-overlay"></label>
            <div class="menu p-4 overflow-y-auto w-80 bg-gray-800">
              <div class="avatar">
                <div class="rounded-full">
                  <img src={profile4} alt="" />
                </div>
              </div>
              <div>
                <h3 className='text-[#fffbc4] text-xl font-bold text-center'>Ariful Haque</h3>

                <h3 className='text-[#fffbc4] text-xl font-bold text-center underline underline-offset-8 '>Full Stack Web-Developer</h3>
               

                <div className='mt-5 '>
                  <p className=' text-center text-white font-bold text-xl hover:text-primary'><Link to='/'>Home</Link></p>
                  <p className=' text-center text-white font-bold text-xl hover:text-primary'><Link to='/blog'>Blog</Link></p>
                  <p className='text-center text-white font-bold text-xl hover:text-primary'><Link to='/about'>About</Link></p>
                  
                  <p className=' text-center text-white font-bold text-xl hover:text-primary'><Link to='/contact'>Contact</Link></p>
                </div>


              </div>

            </div>
          </div>
        </div>

        <div className="hero-overlay bg-opacity-0"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md mt-4 ">
            <h1 className="mb-1 text-3xl font-bold ">I Design & Build </h1>
            <h1 className="mb-1 text-3xl font-bold">Creative Products </h1>

            {/* <button className='btn bg-inherit font-bold border-primary border-2 hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white hover:border-0 '>Get Touch</button> */}

            <label for="my-drawer" class="btn bg-inherit font-bold border-primary border-2 hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white hover:border-0  drawer-button">Get Touch</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;