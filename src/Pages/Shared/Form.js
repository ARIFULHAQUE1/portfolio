import React from 'react';

const Form = () => {

      const handleSubmit = (event) => {

            event.preventDefault();
            const name = event.target.userName.value;
            const email = event.target.userEmail.value;
            const comment = event.target.userComment.value;
      
            const userFeedback = { name, email, comment }
            fetch('http://localhost:5000/feedback', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(userFeedback)
            })
                  .then(res => res.json())
                  .then(data => {
                      
                        alert("Thank you for Feedback!!")
      
      
      
                        console.log(data)
            
                  });
                  event.target.reset();
      }
      return (
            <div>
                  <div className=" w-full max-w-xs mb-4 ">
                        <div className='flex justify-center'>

                        </div>
                              
                        <form onSubmit={handleSubmit}>

                                    <input name='userName' type="text" placeholder="Enter name" className="input input-bordered w-full max-w-xs mb-4 bg-zinc-800" required />


                                    <input name='userEmail' type="email" placeholder="Enter email" className="input input-bordered w-full max-w-xs mb-4 bg-zinc-800" required />

                                    <textarea name='userComment' className="textarea w-full  mb-4 bg-zinc-800 text-white" placeholder="Write Something.." required></textarea>


                                    <input className='btn bg-gradient-to-r from-primary to-secondary  w-full' type="submit" value='Send Feedback' />

                              </form>

                        </div>
            </div>
      );
};

export default Form;