import React from 'react'

const SingleService = ({ data }) => {
    
    return (
        <div>
            <img style={{height: '300px'}} src={data.img} alt="" />
            <h2 className="text-3xl text-indigo-600">{data.name}</h2>
            <p>Duration: {data.duration}</p>
            <p>Fee: {data.price} BDT</p>
        </div>
    )
}

export default SingleService
