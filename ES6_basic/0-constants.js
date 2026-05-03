export function taskFirst() {
  // استخدام const لأن القيمة لا تتغير أبداً بعد تعريفها
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  // استخدام let لأن القيمة سيتم تعديلها (إضافة نص آخر لها)
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
