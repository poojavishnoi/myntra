import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProductFilter, setPriceFilter, setSortFilter,setReset } from '../store/actions/actions'


export default function Filter() {

  const sortBy = useSelector(state => state.sortBy)
  const product = useSelector(state => state.product)
  const price = useSelector(state => state.price)
  const dispatch = useDispatch()

  return (
    <div className="w-full p-2 ">
      <h2 className='text-xl font-medium'>Filters</h2>

      <div className="p-2 mt-2">
        <h3 className="text-lg">Price: {price}</h3>
        <input
          type="range"
          min="400"
          max="2000"
          value={price}
          className="slider"
          step="100"
          onChange={(e) =>
            dispatch(setPriceFilter(e.target.value))
          }
        />
      </div>

      <div className="p-2">
        <h3 className='text-lg'>Category</h3>
        <input
          type="checkbox"
          id="tshirt"
          className='mr-2'
          checked={product.indexOf("Tshirt") > -1}
          onChange={() =>
            dispatch(setProductFilter("Tshirt"))
          }
        />
        <span>Tshirt</span>
        <br />
        <input
          type="checkbox"
          id="shirt"
          className='mr-2'

          checked={product.indexOf("Shirt") > -1}
          onChange={() =>
            dispatch(setProductFilter("Shirt"))
          }
        />
        <span>Shirt</span>
        <br />
        <input
          type="checkbox"
          id="dress"
          className='mr-2'

          checked={product.indexOf("Dress") > -1}
          onChange={() =>
            dispatch(setProductFilter("Dress"))
          }
        />
        <span>Dress</span>
      </div>

      <div className="p-2">
        <h3 className='text-lg'>Sort by</h3>
        <input
          type="radio"
          name="sort"
          className='mr-2'
          checked={sortBy && sortBy === "LOW_TO_HIGH"}
          onChange={() =>
            dispatch(setSortFilter("LOW_TO_HIGH" ))
          }
        />
        <span>Price - Low to High</span>
        <br />
        <input
          type="radio"
          name="sort"
          className='mr-2'
          checked={sortBy && sortBy === "HIGH_TO_LOW"}
          onChange={() =>
            dispatch(setSortFilter("HIGH_TO_LOW"))
          }
        />
        <span>Price - High to Low</span>
        <br />
      </div>

      <div className="p-2">
        <button
          className="bg-gray-700 text-white px-4 py-2 my-2 rounded-md text-sm"
          onClick={() => {
            console.log('reset')
            dispatch(setReset())}}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
}

