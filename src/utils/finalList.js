import { useSelector } from "react-redux"
import getPriceSortedList from "./price";
import getProductSortedList from "./product";
import getSortedList from "./sorting";
import getSearchedList from "./searchQuery";

export default function GetFinalList(list) {
  const {sortBy, price, searchQuery, product} = useSelector(state => state)
  console.log(sortBy, price, searchQuery, product);
  
  const searchedList = getSearchedList(list,searchQuery);
  const priceSortedList = getPriceSortedList(searchedList,price);
  const productSortedList = getProductSortedList(priceSortedList,product);
  const sortedList = getSortedList(productSortedList,sortBy);

  return sortedList

};
