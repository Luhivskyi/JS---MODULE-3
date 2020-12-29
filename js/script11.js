function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
const keys = Object.keys(object);
  for(key in keys){
  
  propCount += 1 ;
  
  }
  // Пиши код выше этой строки
  return propCount;
}