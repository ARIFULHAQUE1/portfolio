import React from 'react';

import facebook from '../../../icons/facebook.png'
import twitter from '../../../icons/twitter.png'
import linkedin from '../../../icons/linkedin.png'
import github from '../../../icons/github.png'
import footer from '../../../images/footer.png'

const year = new Date().getFullYear();

const Footer = () => {
      return (
            <div style={{ background: `url(${footer})`,backgroundSize:'100%'}}>
                  <footer className="footer  p-10  text-base-content">
                        <div>
                              <span className="footer-title">Services</span>
                              <a className="link link-hover">Branding</a>
                              <a className="link link-hover">Design</a>
                              <a className="link link-hover">Marketing</a>
                              <a className="link link-hover">Advertisement</a>
                        </div>
                        <div>
                              <span className="footer-title">Company</span>
                              <a className="link link-hover">About us</a>
                              <a className="link link-hover">Contact</a>
                              <a className="link link-hover">Jobs</a>
                              <a className="link link-hover">Press kit</a>
                        </div>
                        <div>
                              <span className="footer-title">Social</span>
                              <div className="grid grid-flow-col gap-4">

                                    <div>
                                          <a href='https://www.facebook.com/arifulhuq.arif.7/'><img src={linkedin} alt="" /></a>
                                    </div>

                                    <div>
                                          <a href='https://www.linkedin.com/in/ariful-haque-a9623b229/'><img src={github} alt="" /></a>
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
                        <p className='text-center text-slate-400'>Copyright © {year} || All right reserved </p>
                        </div>
            </div>
      );
};

export default Footer;