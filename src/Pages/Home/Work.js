import React from 'react';
import successful from '../../icons/successful.png'
import checkMark from '../../icons/checkMark.png'
import ratingStars from '../../icons/ratingStars.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
const Work = () => {
      return (
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 mb-10  '>
                  <div className="card bg-base-100 shadow-xl hover:bg-slate-100 shadow-xl ">
                        <div className="card-body">
                              <div className='flex'>
                                    <div className='flex-1 mt-4'>
                                          <img width={'50%'} src={successful} alt="" />

                                    </div>
                                    <div className='flex-1 mt-4'>
                                    <h2 className="mb-2 mx-5 text-2xl font-bold text-secondary hover:text-primary ">1 year<FontAwesomeIcon className='mb-2' icon={faPlus} /></h2>
                                          <p className='text-xl font-bold '>Experiences</p>
                                    </div>
                              </div>
                        </div>

                  </div>
                  <div className="card bg-base-100 shadow-xl hover:bg-slate-100 shadow-xl">
                        <div className="card-body">
                              


                              <div className='flex'>
                                    <div className='flex-1 mt-4'>
                                          <img width={'50%'} src={checkMark} alt="" />

                                    </div>
                                    <div className='flex-1 mt-4'>
                                    <h2 className="mx-12 mb-2 text-2xl font-bold text-secondary  hover:text-primary">12<FontAwesomeIcon className='mb-2' icon={faPlus} /></h2>
                                          <p className='text-xl font-bold '>Completed Project</p>
                                    </div>
                              </div>
                        </div>

                  </div>
                  <div className="card bg-base-100 shadow-xl hover:bg-slate-100 shadow-xl">
                        <div className="card-body ">
                              


                              <div className='flex'>
                                    <div className='flex-1 mt-4'>
                                          <img width={'50%'} src={ratingStars} alt="" />

                                    </div>
                                  
                                    <div className='flex-1 mt-4'>
                                    <h2 className="mx-6 text-2xl font-bold text-secondary hover:text-primary mb-2">12<FontAwesomeIcon className='mb-2' icon={faPlus} /></h2>
                                          <p className='text-xl font-bold '>Happy Client's</p>
                                    </div>
                              </div>
                        </div>

                  </div>



            </div>
      );
};

export default Work;