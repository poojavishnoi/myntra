import React from 'react'
import {data} from '..//data.js'
import Filter from '../components/Filter.jsx'

function ProductListing() {

  return ( 
    <div className='p-14 flex justify-start'>
    <Filter/>
    <div className="flex justify-center flex-wrap gap-12">
      {
        data.map((item)=>{
          return(
            <div className=' p-2'>
              <img src={item.img} alt="" className=' rounded-t-md w-[20rem] h-[30rem] object-cover'/>
              <div className="p-1"></div>
              <p className='font-medium text-xl '>{item.name}</p>
              <p>{item.product}</p>
              <p className='text-sm my-1 text-gray-400'>Rs. {item.price}</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default ProductListing