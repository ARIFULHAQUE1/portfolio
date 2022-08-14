import React from 'react';

import facebook from '../../../icons/facebook.png'
import twitter from '../../../icons/twitter.png'
import linkedin from '../../../icons/linkedin.png'
import github from '../../../icons/github.png'
import { Link } from 'react-router-dom';




const year = new Date().getFullYear();

const Footer = () => {
      return (
            <div className='bg-zinc-800 ' >
                  <footer className="footer  p-10  text-slate-200">
                        <div>
                              <span className="footer-title">Services</span>
                              <a className="link link-hover">Branding</a>
                              <a className="link link-hover">Design</a>
                              <a className="link link-hover">Marketing</a>
                              <a className="link link-hover">Advertisement</a>
                        </div>
                        <div>
                              <span className="footer-title">Company</span>
                  
                              <Link to='/contact'>Contact</Link>
                              <Link to='/about'>About</Link>
                             
                              <a className="link link-hover">Jobs</a>
                              <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                              <span className="footer-title">Social</span>
                              <div className="grid grid-flow-col gap-4">

                                    <div>
                                          <a href='https://www.linkedin.com/in/ariful-haque-a9623b229/'><img src={linkedin} alt="" /></a>
                                    </div>

                                    <div>
                                          <a href='https://github.com/ARIFULHAQUE1'><img src={github} alt="" /></a>
                                    </div>

                                    <div>
                                          <a href='https://twitter.com/ArifulHaque23'><img src={twitter} alt="" /></a>
                                    </div>
                                    <div>
                                          <a href="https://www.facebook.com/arifulhuq.arif.7/"><img src={facebook} alt="" /></a>
                                    </div>





                              </div>
                        </div>
                     
                  </footer>
                  <div>
                        <p className='text-center text-slate-200 p-2'>Copyright © {year} || All right reserved </p>
                        </div>
            </div>
      );
};

export default Footer;