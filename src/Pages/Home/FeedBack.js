import React from 'react';
import Button from '../Shared/Button/Button';

const FeedBack = () => {
      return (

            <div className='bg-zinc-700'>
                  <h2 className='text-3xl text-primary font-bold font-serif p-5'>Feedback</h2>

                  <div className=' flex justify-center text-white'>

                        <div class=" w-full max-w-xs mb-4 ">
                              <input type="text" placeholder="Enter name" class="input input-bordered w-full max-w-xs mb-4 bg-zinc-800" required />
                              

                              <input type="email" placeholder="Enter email" class="input input-bordered w-full max-w-xs mb-4 bg-zinc-800" required />
                            
                              <textarea class="textarea w-full  mb-4 bg-zinc-800" placeholder="Write Comment.."></textarea>
                              <div className='flex justify-center'>
                              <Button>Send Feedback</Button>
                              </div>
                        </div>
                        

                  </div>
            </div>



      );
};

export default FeedBack;