import React from 'react'

const Contact = () => {
    return (
        <div className="text-center bg-gray-600">
            <section className="mt-5 py-5">
           
               <div className="text-center mb-5">
                    <h2 className="text-white text-4xl">Contact With Us</h2>
                
               </div>
              
                   <form action="">
                       <div className="m-3 ">
                           <input type="text" className="form-control px-2 rounded" placeholder="Email Address *"/>
                       </div>
                       <div className="m-3 ">
                           <input type="text" className="form-control px-2 rounded" placeholder="Subject *"/>
                       </div>
                       <div className="m-3 ">
                           <textarea name="" className="form-control px-2 rounded" id="" cols="25" rows="5" placeholder="Message *"></textarea>
                       </div>
                       <div className="m-3 text-center">
                           <button type="button" className="bg-green-600 text-white px-3 py-2 rounded"> Submit </button>
                       </div>
                   </form>
              
        
       </section>
        </div>
    )
}

export default Contact
