import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUserCircle, faEnvelopeCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons'
const Personalinfo = () => {
      return (
            <div>
                  <div className='p-5'>
                  <h3 className='text-2xl font-semibold text-white ml-1 mb-2'>Address</h3>
                                    <p className='text-white text-xl'> <FontAwesomeIcon className='mr-2' icon={faUserCircle}></FontAwesomeIcon> Ariful Haque</p>

                                    <p className='text-white text-xl'> <FontAwesomeIcon className='mr-2' icon={faPhone}></FontAwesomeIcon>+8801735966910</p>

                                    <p className='text-white text-xl'> <FontAwesomeIcon className='mr-2' icon={faEnvelopeCircleCheck}></FontAwesomeIcon>arifulhaquearif2326@gmail.com</p>

                                    <p className='text-white text-xl'> <FontAwesomeIcon className='mr-2' icon={faLocationDot}></FontAwesomeIcon>Kishoregaj,Bangladesh</p>
                              </div>
            </div>
      );
};

export default Personalinfo;