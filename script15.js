function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
const salary = Object.values(salaries);
  for (key of salary){
  totalSalary += key;
  }
  // Пиши код выше этой строки
  return totalSalary;
}
