import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUserCircle, faEnvelopeCircleCheck, faPhone } from '@fortawesome/free-solid-svg-icons'
import Personalinfo from '../Shared/Personalinfo';
import Form from '../Shared/Form';

const Contact = () => {
      const handleSubmit = (event) => {

            event.preventDefault();
            const name = event.target.userName.value;
            const email = event.target.userEmail.value;
            const comment = event.target.userComment.value;

            const userFeedback = { name, email, comment }
            fetch('http://localhost:5000/contact', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userFeedback)
            })
                  .then(res => res.json())
                  .then(data => {

                        alert("Thank you for Message!!")



                        console.log(data)

                  });
            event.target.reset();
      }

      return (
            <div className='bg-zinc-700'>
                  <h2 className='text-3xl text-primary font-bold ml-6 py-2'>Contact Information</h2>


                  <div className='grid lg:grid-cols-2'>
                        <div>
                              <Personalinfo></Personalinfo>
                              <div className='ml-5 mb-5'>
                                    <button className=' btn bg-gradient-to-br from-secondary via-orange-700 to-secondary uppercase w-36'>hire me</button>
                              </div>
                        </div>

                        <div className=" w-full max-w-xs mb-4 ">
                              <h3 className='text-white font-semibold text-xl text-center mb-3 uppercase'>Send Me A Note</h3>
                              <div className='ml-16'>

                                    <form onSubmit={handleSubmit}>

                                          <div className='grid lg:grid-cols-2 gap-5 text-white'>
                                                <div >
                                                      <input name='userName' type="text" placeholder="Enter name" className="input input-bordered w-full max-w-xs mb-4 bg-zinc-800" required />
                                                </div>

                                                <div >
                                                      <input name='userEmail' type="email" placeholder="Enter email" className="input input-bordered w-full max-w-xs mb-4 bg-zinc-800" required />
                                                </div>
                                          </div>

                                          <textarea name='userComment' className="textarea w-full  mb-4 bg-zinc-800 text-white" placeholder="Tell Me About your Needs" required></textarea>


                                          <input className='btn bg-gradient-to-r from-primary to-secondary  w-full' type="submit" value='Send Message' />

                                    </form>

                              </div>



                        </div>
                  </div>
            </div>
      );
};

export default Contact;