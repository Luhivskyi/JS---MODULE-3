// Пиши код ниже этой строки
function addOverNum(...args) {
  let total = 0;
 let min  = args[0];
  for(let i = 0; i < args.length; i++)
 if (args[i] > min)
  total += args[i];
  return total;
  // Пиши код выше этой строки

}