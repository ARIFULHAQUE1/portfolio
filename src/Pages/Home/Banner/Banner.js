import React from 'react';
import { Link } from 'react-router-dom';
import profile3 from '../../../images/profile3.png'
import profile1 from '../../../images/profile1.png'
import github from '../../../icons/github.png'
import linkedin from '../../../icons/linkedin.png'
import email from '../../../icons/email.png'





const Banner = () => {
  return (

    <div>

      <div
        className="hero lg:min-h-screen  md:min-h-screen drawer"
        style={{ background: `url(${profile3})`, backgroundRepeat:'no-repeat', backgroundPosition: 'center', height: '550px' }} >

        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">


          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <div className="menu p-4 overflow-y-auto w-80 bg-gray-800">
              <div className="avatar">
                <div className="rounded-full">
                  <img src={profile1} alt="" />
                </div>
              </div>
              <div>
                <h3 className='text-[#fffbc4] text-xl font-bold text-center mt-1'>Ariful Haque</h3>

                <h3 className='text-[#fffbc4] text-xl font-bold text-center underline underline-offset-8 '>Full Stack Web-Developer</h3>
               

                <div className='mt-5 '>
                  <p className=' text-center text-white font-semibold text-xl hover:text-[#fffbc4]'><Link to='/'>Home</Link></p>
                  <p className=' text-center text-white font-semibold text-xl hover:text-[#fffbc4]'><Link to='/blog'>Blog's</Link></p>
                  
                  <p className=' text-center text-white font-semibold text-xl hover:text-[#fffbc4]'><Link to='/contact'>Contact</Link></p>

                  <p className='text-center text-white font-semibold text-xl hover:text-[#fffbc4]'><Link to='/about'>About Me</Link></p>
                  
              
                </div>

                <div className='flex justify-center gap-2 mt-5'>
                
                 <a href="https://github.com/ARIFULHAQUE1"> <img width={'24px'} src={github} alt="" /></a>
                  <a href="https://www.linkedin.com/in/ariful-haque-a9623b229/"><img width={'24px'}  src={linkedin} alt="" /></a>
               <a href="https://mail.google.com/mail/u/0/#inbox"> <img width={'24px'}  src={email} alt="" /></a>
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

            <label htmlFor="my-drawer" className="btn bg-inherit font-bold border-primary border-2 hover:bg-gradient-to-r from-primary to-secondary text-primary hover:text-white hover:border-0  drawer-button">Get Touch</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;