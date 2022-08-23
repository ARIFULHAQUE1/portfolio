import React from 'react';
import code from '../../images/code.jpg'
import developement from '../../images/development.jpg'
import ui from '../../images/ui.jpg'

const Services = () => {
      return (
            <div className=''>
                  <h2 className='text-center text-3xl font-bold  text-primary font-serif underline underline-offset-4'>What I Do?</h2>

                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-7'>
                        <div className="card  bg-base-100 shadow-xl">
                              <figure><img src={ui} alt="ui/ux design" /></figure>
                                    <div className="card-body text-white bg-gradient-to-r from-secondary to-primary">
                                          <h2 className="text-center font-bold text-xl">UI/UX Design</h2>
                                          <p className='font-mono'>I am a professional UI/UX Designer. I have Done Many of Web-Application.I Use Latest Technology to Build a Application. I Try My best to Give a Authentic User Experience to Explore the application. </p>
                                    </div>
                                    
                              </div>

                        <div className="card  bg-base-100 shadow-xl">
                              <figure><img src={developement} alt="Shoes" /></figure>
                                    <div className="card-body text-white bg-gradient-to-r from-accent to-primary">
                                          <h2 className="text-center font-bold text-xl">Development</h2>
                                          <p className='font-mono'>I Develope Many Application like E-commerce, Business-organizations, Warehouse-management, portfolio. I'm Professional at Web-application Development.</p>
                                    </div>
                                    
                              </div>
                        <div className="card  bg-base-100 shadow-xl">
                              <figure><img src={code} alt="Shoes" /></figure>
                                    <div className="card-body text-white bg-gradient-to-r from-accent to-extra">
                                          <h2 className="text-center font-bold text-xl">Code Testing</h2>
                                          <p className='font-mono'>Fixing Bug it like a Hobby for me. I Tested many Full-stack Project. And I Fix The Problem of Code. Sometimes its hard to Do But Finally i Done It.</p>
                                    </div>
                                    
                              </div>
                  </div>



            </div>
      );
};

export default Services;