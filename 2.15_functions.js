// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age) {
//       return (age > 18) ?  true : confirm('Родители разрешили?');
//   }

//   Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

// Пример вызовов:

// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }


console.log(min(3, 2));
