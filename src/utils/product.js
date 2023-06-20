export default function product(list, product) {
  if(product.length > 0){
    return list.filter((item) => {
      return product.indexOf(item.product) > -1
    })
  }
  return list
};
