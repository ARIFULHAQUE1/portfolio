import React from 'react';
import successful from '../../icons/successful.png'
import checkMark from '../../icons/checkMark.png'
import ratingStars from '../../icons/ratingStars.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const Work = () => {
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mb-10 bg-gray-800 '>
                  <div className="card  hover:bg-gray-700 shadow-xl bg-gray-800 text-white">
                        <div className="card-body">
                              <div className='flex'>
                                    <div className='flex-1 mt-4'>
                                          <img width={'50%'} src={successful} alt="" />

                                    </div>
                                    <div className='flex-1 mt-4'>
                                    <h2 className="mb-2 mx-5 text-2xl font-bold text-primary ">1 year<FontAwesomeIcon  icon={faPlus} /></h2>
                                          <p className='text-xl font-bold '>Experiences</p>
                                    </div>
                              </div>
                        </div>

                  </div>
                  <div className="card bg-gray-800 hover:bg-gray-700 text-white shadow-xl">
                        <div className="card-body">
                              


                              <div className='flex'>
                                    <div className='flex-1 mt-4'>
                                          <img width={'50%'} src={checkMark} alt="" />

                                    </div>
                                    <div className='flex-1 mt-4'>
                                    <h2 className="mx-12 mb-2 text-2xl font-bold text-primary">12<FontAwesomeIcon  icon={faPlus} /></h2>
                                          <p className='text-xl font-bold '>Completed Project</p>
                                    </div>
                              </div>
                        </div>

                  </div>
                  <div className="card bg-gray-800 hover:bg-gray-700 text-white shadow-xl">
                        <div className="card-body ">
                              


                              <div className='flex'>
                                    <div className='flex-1 mt-4'>
                                          <img width={'50%'} src={ratingStars} alt="" />

                                    </div>
                                  
                                    <div className='flex-1 mt-4'>
                                    <h2 className="mx-6 text-2xl font-bold text-primary mb-2">12<FontAwesomeIcon  icon={faPlus} /></h2>
                                          <p className='text-xl font-bold '>Happy Client's</p>
                                    </div>
                              </div>
                        </div>

                  </div>



            </div>
      );
};

export default Work;