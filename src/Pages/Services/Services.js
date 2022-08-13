import React from 'react';
import code from '../../images/code.jpg'
import developement from '../../images/development.jpg'
import ui from '../../images/ui.jpg'

const Services = () => {
      return (
            <div className=''>
                  <h2 className='text-center text-3xl font-bold  text-primary font-serif underline underline-offset-4'>What I Do?</h2>

                  <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-7'>
                        <div className="card  bg-base-100 shadow-xl">
                              <figure><img src={ui} alt="ui/ux design" /></figure>
                                    <div className="card-body text-white bg-gradient-to-r from-secondary to-primary">
                                          <h2 className="text-center font-bold text-xl">UI/UX Design</h2>
                                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis dicta quos magni optio nisi animi eveniet vero consequatur. Expedita quod possimus esse reprehenderit dolor totam ea sed sint ex facilis.</p>
                                    </div>
                                    
                              </div>

                        <div className="card  bg-base-100 shadow-xl">
                              <figure><img src={developement} alt="Shoes" /></figure>
                                    <div className="card-body text-white bg-gradient-to-r from-accent to-primary">
                                          <h2 className="text-center font-bold text-xl">Development</h2>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nam, cupiditate ipsum sequi vero et tenetur dolor consectetur dolorem hic expedita eos officiis? Illum, culpa reprehenderit aut pariatur nobis numquam.</p>
                                    </div>
                                    
                              </div>
                        <div className="card  bg-base-100 shadow-xl">
                              <figure><img src={code} alt="Shoes" /></figure>
                                    <div className="card-body text-white bg-gradient-to-r from-accent to-extra">
                                          <h2 className="text-center font-bold text-xl">Code Testing</h2>
                                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi quis voluptas cum enim harum consectetur officiis maxime placeat sed optio fugit, perspiciatis magnam nostrum, natus, incidunt repellendus neque facilis.</p>
                                    </div>
                                    
                              </div>
                  </div>



            </div>
      );
};

export default Services;