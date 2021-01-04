function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
let newTask = {};
newTask.text = data.text;
newTask.category = data.category || category;
newTask.priority = data.priority || priority;
newTask.completed = completed;
return newTask;
  // Пиши код выше этой строки
}