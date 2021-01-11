const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
      
    const indexOfArr = this.potions.indexOf(oldName);
      this.potions.splice(indexOfArr, 1, newName);
      
   
  },
};
