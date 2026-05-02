/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
const array = [1, 1, 2, 3, 4, 5, 6, 1, 3, 4, 3, 2, 6, 4];

function findUniqueElements(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let found = false;
    for (let j = 0; j < array.length; j++) {
      if (element === result[j]) {
        found = true;
      }
    }
    if (!found) {
      result.push(element);
    }
  }
  return result;
}
let uniqueElement = findUniqueElements(array);
console.log(uniqueElement);