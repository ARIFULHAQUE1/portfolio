import React from 'react';
import Personalinfo from '../Shared/Personalinfo';

const About = () => {
      return (
            <div className='bg-zinc-700 '>
                  <h3 className='text-3xl font-bold text-white ml-6 py-2'>I'm <span className='text-primary'>Ariful Haque</span></h3>
                  <span className='font-bold text-white ml-6'>Web-Developer</span>
                  <p className='text-white m-2 p-5'>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <p className='text-white  p-5'>Delivering work within time and budget which meets client’s requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley.</p>

                  <div tabindex="0" className="collapse collapse-arrow border-t border-primary text-primary rounded-box ">
                        <div className="collapse-title text-xl font-medium">
                              Know More..
                        </div>
                        <div className="collapse-content  ">
                        <Personalinfo></Personalinfo>
                        </div>
                  </div>
            </div>
      );
};

export default About;