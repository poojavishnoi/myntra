const initialState = {
 
    product: [],
    sortBy: "",
    rating: 0,
    price: 2000,
    searchQuery: "",
    title: "filter"
}
 const filterReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_PRODUCT_FILTER':

      let filterList = [...state.product]
      const isPresent = filterList.indexOf(action.payload)

      if(isPresent === -1){
        filterList.push(action.payload)
      }else{
        filterList.splice(isPresent,1)
      }
      return {
        ...state,
        product: filterList
      }
    case 'SET_PRICE_FILTER':
      return {
        ...state,
        price: action.payload
      }
    case 'SET_RATING_FILTER':
      return {
        ...state,
        rating: action.payload
      }
    case 'SET_SORT_FILTER':
      return {
        ...state,
        sortBy: action.payload
      }
    case 'SET_SEARCH_FILTER':
      return {
        ...state,
        searchQuery: action.payload
      }
    case 'SET_RESET':
      return {
        ...state,
        product: [],
        sortBy: "",
        rating: 0,
        price: 2000,
        searchQuery: ""
      }

      default: return state
  }
}



export default filterReducer;