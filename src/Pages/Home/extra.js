import React from 'react';

const extra = () => {
      return (
            <div>
                  <div className='qualification text-center my-10'>
                              <h3 className='text-bold text-2xl font-bold text-info mb-4'>My Skills</h3>

                              <div className=' inline-block align-baseline  grid-cols-2 gap-4'>
                                    <div>
                                          <div className='flex justify-between'>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>Html,Css</p>
                                                </div>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>90%</p>
                                                </div>
                                          </div>

                                          <progress className="progress progress-success  w-56 ] " value="90" max="100"></progress>


                                    </div>

                                    <div>
                                          <div className='flex justify-between'>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>Tailwind,Bootstrap</p>
                                                </div>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>70%</p>
                                                </div>
                                          </div>

                                          <progress className="progress progress-success  w-56 ] " value="70" max="100"></progress><br />
                                    </div>
                                    <div>
                                          <div className='flex justify-between'>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>Web-Design</p>
                                                </div>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>80%</p>
                                                </div>
                                          </div>

                                          <progress className="progress progress-success  w-56 ] " value="80" max="100"></progress><br />
                                    </div>

                                    <div>
                                          <div className='flex justify-between'>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>javaScript</p>
                                                </div>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>60%</p>
                                                </div>
                                          </div>

                                          <progress className="progress progress-success  w-56 ] " value="60" max="100"></progress><br />
                                    </div>

                                    <div>
                                          <div className='flex justify-between'>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>React Js</p>
                                                </div>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>55%</p>
                                                </div>
                                          </div>

                                          <progress className="progress progress-success  w-56 ] " value="55" max="100"></progress><br />
                                    </div>

                                    <div>
                                          <div className='flex justify-between'>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>Node Js</p>
                                                </div>
                                                <div>
                                                      <p className='text-xl text-white font-semibold'>40%</p>
                                                </div>
                                          </div>

                                          <progress className="progress progress-success  w-56 ] " value="40" max="100"></progress><br />
                                    </div>






                              </div>
                        </div>
            </div>
      );
};

export default extra;