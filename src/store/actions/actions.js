export const setProductFilter = ( product) => {
  return {
    type: 'SET_PRODUCT_FILTER',
    payload: product
  }

}

export const setPriceFilter = (price) => {
  
    return {
      type: 'SET_PRICE_FILTER',
      payload: price
    }
  
  }
  
  export const setRatingFilter = (rating) => {

    return {
      type: 'SET_RATING_FILTER',
      payload: rating
    }
  }

  export const setSortFilter = (sort) => {
      
      return {
        type: 'SET_SORT_FILTER',
        payload: sort
      }

  }

  export const setSearchFilter = (text) => {
  
    return {
      type: 'SET_SEARCH_FILTER',
      payload: text
    }
  
  }

  export const setReset = (reset) => {
    
    return  {
      type: 'SET_RESET',
      payload: reset
    }

  }