export default function getPriceSortedList(list, price) {
  return list.filter((item) => {
    return item.price <= price;
  })
};
