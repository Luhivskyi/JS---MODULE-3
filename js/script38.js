const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    let indexOfArr = this.potions.indexOf(potionName);
    this.potions.splice(indexOfArr, 1);
    // 🔥 Оставляем три пустые строки для студента
    // Пиши код выше этой строки
  },
};