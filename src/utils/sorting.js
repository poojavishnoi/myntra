export default function getSortedList(list, sortBy) {
  if(sortBy === "HIGH_TO_LOW"){
    return [...list.sort((a,b) => b.price - a.price)]
  }
  if(sortBy === "LOW_TO_HIGH"){
    return [...list.sort((a,b) => a.price - b.price)]
  }
  return list
};
