/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
let array1 = [1, 3, 5, 6, 4, 2, 8];
let array2 = [1, 2, 3, 4, 5, 6];

function findCommonElements(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    let current = array1[i];                                                                    
    let found = false;
    for (let j = 0; j < array2.length; j++) {
      if (current === array2[j]) {
        found = true;
      }
    }
    let alreadyInResult = false;
    for (let j = 0; j < result.length; j++) {
      if (current === result[j]) {
        alreadyInResult = true;
      }
    }
    if (found && !alreadyInResult) {
        result.push(current)
    }
  }
  return result;
}

let commonElements = findCommonElements(array1, array2)
console.log(commonElements);


/*1. взять current
2. проверить есть ли в array2 → found
3. проверить есть ли в result → alreadyInResult
4. если found && !alreadyInResult → push*/