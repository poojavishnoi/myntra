import React from 'react'
import {data} from '..//data.js'
import { useLocation } from 'react-router';

function Product() {

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const product = data.find((item) => item._id === Number(id));

  return (
    <div className='my-10 mx-4 md:mx-24 p-2 md:p-10 md:flex bg-blue-50 gap-10'>
      <img src={product.img} alt="product_img" className='w-[100%] md:w-[30%] ' />
      <div className="p-2 md:p-10  min-w-40 bg-slate-950 text-white w-full ">
        <p className='text-2xl mb-4 font-medium'>{product.name}</p>
        <p className='text-xl font-medium'>{product.product}</p>
        <p className='text-xl font-medium'>Rs. {product.price}</p>

      </div>

    </div>
  )
}

export default Product