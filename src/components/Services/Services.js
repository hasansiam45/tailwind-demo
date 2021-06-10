import React from 'react'
import img1 from '../../img/1.jpg'
import img2 from '../../img/2.jpg'
import img3 from '../../img/bg.jpg'
import SingleService from '../SingleService/SingleService'

const datas = [

    {
        name: 'Regular Package',
        img: img1,
        duration: '3 months',
        price: 3000
        
    },
    {
        name: 'Favourite Package',
        img: img2,
        duration: '6 months',
        price: 5000
        
    },
    {
        name: 'Special Package',
        img: img3,
        duration: '12 months',
        price: 7500
        
    },
    

]

const Services = () => {
    
    return (
        <div className="p-5 text-center">
            <h1 className="text-5xl text-center my-5 font-black">Our Services</h1>
        <div className="grid sm:grid-cols-1 gap-4 md:grid-cols-3 gap-8">
            {
                datas.map(data => <SingleService data={data}></SingleService>)
            }
            </div>
        </div>
    )
}

export default Services
