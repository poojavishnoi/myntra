import React from 'react'
import {data} from '..//data.js'
import Filter from '../components/Filter.jsx'
import {AiFillStar} from 'react-icons/ai'
import {useSelector, useDispatch} from 'react-redux'
import GetFinalList from '../utils/finalList.js'

function ProductListing() {

  const finalProductList = GetFinalList(data);

  return ( 
    <div className='p-14 flex justify-start'>
    <Filter/>
    <div className="flex justify-center flex-wrap gap-12">
      {
        finalProductList?.map((item)=>{
          return(
            <div className=' p-2' key={item._id}>
              <img src={item.img} alt="" className=' rounded-t-md w-[20rem] h-[30rem] object-cover'/>
              <div className="p-1"></div>
              <p className='font-medium text-xl '>{item.name}</p>
              <p>{item.product}</p>
              <p className='text-sm my-1 text-gray-400'>Rs. {item.price}</p>


              <p className='flex items-center text-sm my-1 '>Rating: {item.rating} <AiFillStar  fontSize="20px" color="rgb(255, 208, 0)" /></p>
            
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default ProductListing