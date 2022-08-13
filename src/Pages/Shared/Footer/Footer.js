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
                  <footer class="footer  p-10  text-base-content">
                        <div>
                              <span class="footer-title">Services</span>
                              <a class="link link-hover">Branding</a>
                              <a class="link link-hover">Design</a>
                              <a class="link link-hover">Marketing</a>
                              <a class="link link-hover">Advertisement</a>
                        </div>
                        <div>
                              <span class="footer-title">Company</span>
                              <a class="link link-hover">About us</a>
                              <a class="link link-hover">Contact</a>
                              <a class="link link-hover">Jobs</a>
                              <a class="link link-hover">Press kit</a>
                        </div>
                        <div>
                              <span class="footer-title">Social</span>
                              <div class="grid grid-flow-col gap-4">

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