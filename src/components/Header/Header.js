import React from 'react'
import img from '../../img/man.jpg'
const Header = () => {
    return (
        <div>
                <nav style={{background: 'black', width: '100%', color: 'white'}}>
                <ul style={{display: 'flex', justifyContent: 'flex-end', marginRight: '5%'}}>
                    <li className="m-3"> <a href="#home">Home</a> </li>
                    <li className="m-3"> <a href="#about">About</a> </li>
                    <li className="m-3"> <a href="#contact">Contact</a> </li>
                </ul>
            </nav>
      
          <div className="min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around" style={{ background: 'linear-gradient(to bottom, #F0F4DF, #A1A3BA)' }}>

                  <div className="mt-5 text-center">
                    <h1 className="font-black text-5xl">Power House</h1>
                    <p>Keep Your Body Fit and Lead a Healthy Life</p>
                    <span className="transition duration-500 ease-in-out inline-block bg-green-800 px-8 py-3 rounded-full shadow-lg uppercase text-lg text-white mt-5 cursor-pointer transform hover:bg-green-600 hover:-translate-y-1 hover:scale-110 ...">Explore Now</span>
                  </div>
            
            <img src={img} alt="fit" style={{ width: '300px', height: '300px', borderRadius: '50%'  }} />
            
      </div>
        </div>
    )
}

export default Header
