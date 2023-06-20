export default function getSearchedList(list, query) {
  if(query === ""){
    return list
  }
  return list.filter((item) => {
    return item.product.toLowerCase() === query.toLowerCase();
  }
  )
};
