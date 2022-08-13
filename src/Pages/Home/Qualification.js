import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown,faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import cap from '../../icons/cap.png'
import school from '../../icons/school.png'
import { Link } from 'react-router-dom';

const Qualification = () => {
      return (
            <div className='bg-zinc-800 rounded-t-lg' >

                  <h2 className='text-3xl font-bold font-serif text-center text-secondary pt-5'>Education & Qualification's</h2>

                  <div className='mt-8 '>

                        <h3 className='text-bold text-2xl text-left ml-2 p-5 font-bold text-info'>Education</h3>

                        <div className='p-5 grid lg:grid-cols-2 sm:grid-cols-1 gap-4 '>
                              <div className="card  bg-base-100 shadow-xl bg-black ">


                                    <div className='bg-success border-t-lg text-center'>
                                          <span className=' text-white font-semibold'>2017-2022</span>
                                    </div>

                                    <div className="card-body text-left ">
                                          <div className='flex justify-between'>
                                                <div>
                                                      <h2 className="font-bold text-xl text-white ">Diploma Engineering</h2>
                                                </div>
                                                <div>
                                                      <img width={'40px'} src={cap} alt="" />
                                                </div>

                                          </div>
                                          <h3 className='mr-5 text-success font-bold'>Habiganj Polytechnic Institute</h3>
                                          <p className='text-white '>I Completed My Diploma In Computer Engineering from Habiganj Polytechnic Institute. My CGPA is 3.49</p>

                                    </div>
                              </div>
                              {/* Secondary label */}
                              <div className="card w-full bg-base-100 shadow-xl bg-black">

                                    <div className='bg-success border-t-lg text-center'>
                                          <span className=' text-white font-semibold'>2012-2017</span>
                                    </div>

                                    <div className="card-body text-left ">
                                          <div className='flex justify-between'>
                                                <div>
                                                      <h2 className="font-bold text-xl text-white ">Secondary School</h2>
                                                </div>
                                                <div>
                                                      <img width={'40px'} src={school} alt="" />
                                                </div>
                                          </div>

                                          <h3 className='mr-5 text-success font-bold'>Chatal Bag Hata School & College</h3>
                                          <p className='text-white '>I Completed My Secondary School Certificate from Chatal Bag Hata School & College. My GPA is 4.33</p>

                                    </div>
                              </div>


                        </div>
                        {/* Skill Area */}
                        <div>
                              <h3 className='text-bold text-2xl font-bold text-info ml-2 text-left p-5'>Technology Skills</h3>
                              <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-4 '>



                                    <div className='card'>
                                          <div className='card-body'>
                                                <div className='flex justify-between'>
                                                      <div>
                                                            <p className=' text-white font-bold'>Html/Css</p>
                                                      </div>
                                                      <div>
                                                            <p className=' text-white font-bold'>90%</p>
                                                      </div>
                                                </div>

                                                <progress className="progress progress-success bg-black w-full ] " value="90" max="100"></progress>

                                                <div className='flex justify-between mt-5'>
                                                      <div>
                                                            <p className=' text-white font-bold'>Tailwind/Bootstrap</p>
                                                      </div>
                                                      <div>
                                                            <p className=' text-white font-bold'>70%</p>
                                                      </div>
                                                </div>

                                                <progress className="progress progress-success bg-black  w-full ] " value="70" max="100"></progress>

                                                <div className='flex justify-between mt-5'>
                                                      <div>
                                                            <p className=' text-white font-bold'>Web-Design</p>
                                                      </div>
                                                      <div>
                                                            <p className=' text-white font-bold'>80%</p>
                                                      </div>
                                                </div>

                                                <progress className="progress progress-success bg-black w-full] " value="80" max="100"></progress>

                                          </div>

                                    </div>

                                    <div className='card '>
                                          <div className='card-body'>
                                                <div className='flex justify-between'>
                                                      <div>
                                                            <p className=' text-white font-bold'>javaScript</p>
                                                      </div>
                                                      <div>
                                                            <p className=' text-white font-bold'>60%</p>
                                                      </div>
                                                </div>

                                                <progress className="progress progress-success bg-black w-full ] " value="60" max="100"></progress>

                                                <div className='flex justify-between mt-5'>
                                                      <div>
                                                            <p className='text-xl text-white font-semibold'>React Js</p>
                                                      </div>
                                                      <div>
                                                            <p className='text-xl text-white font-semibold'>55%</p>
                                                      </div>
                                                </div>

                                                <progress className="progress progress-success bg-black w-full ] " value="55" max="100"></progress>
                                                <div className='flex justify-between mt-5'>
                                                      <div>
                                                            <p className='text-xl text-white font-semibold'>node Js</p>
                                                      </div>
                                                      <div>
                                                            <p className='text-xl text-white font-semibold'>40%</p>
                                                      </div>
                                                </div>

                                                <progress className="progress progress-success bg-black w-full ] " value="40" max="100"></progress>

                                                
                                          </div>

                  
                                    </div>
                              </div>

                        </div>
                        <div className='flex justify-center p-5'>
                              <a href='https://drive.google.com/file/d/1uftnSAFTgL30rbjQuKMYLdpJbNbgCvBh/view?usp=sharing'> <button className='btn bg-inherit border-success text-success '>Download Cv <FontAwesomeIcon className='ml-2' icon={faArrowCircleDown }></FontAwesomeIcon> </button></a>
                             
                        </div>

                  </div>
            </div>



            
        
      );
};

export default Qualification;