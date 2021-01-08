function findMatches(arr, ...restArr) {
  const matches = []; // Не изменяй эту строку
  for (const item of restArr) {
    if (arr.includes(item)) {
      matches.push(item);
    }
  }
  // Пиши код выше этой строки
  return matches;
}