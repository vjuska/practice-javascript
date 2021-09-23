// function sum(numbers) {
//   var index = 0;
//   var sum = 0;
//   while (index < numbers.length) {
//     sum += numbers[index];
//     index += 1;
//   }
//   console.log(sum);
// }

// sum([1, 2, 3, 4, 5]);

// function smallest(strings) {
//   var index = 1;
//   var stored = strings[0];
//   while (index < strings.length) {
//     if (stored.length > strings[index].length) {
//       stored = strings[index];
//     }
//     index += 1;
//   }
//   console.log(stored);
// }

// smallest(["will", "vic", "hello", "goodbye"]);

// function reverse(numbers) {
//   var index = numbers.length - 1;
//   var reverseOrder = [];
//   while (index >= 0) {
//     reverseOrder.push(numbers[index]);
//     index -= 1;
//   }
//   console.log(reverseOrder);
// }

// reverse([1, 2, 3, 4, 5]);

// function aword(strings) {
//   var awords = 0;
//   var index = 0;
//   while (index < strings.length) {
//     if (strings[index][0].toLowerCase() === "a") {
//       awords += 1;
//     }
//     index += 1;
//   }
//   console.log(awords);
// }

// aword(["will", "vic", "hello", "goodbye", "alex", "apple"]);

// function combined(strings) {
//   var index = 1;
//   var string = strings[0];
//   while (index < strings.length) {
//     string = string + "," + strings[index];
//     index += 1;
//   }
//   console.log(string);
// }

// combined(["will", "vic", "hello", "goodbye", "alex", "apple", 1]);

// 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).
// function sum(numbers) {
//   var index = 0;
//   var sum = 1;
//   while (index < numbers.length) {
//     sum *= numbers[index];
//     index += 1;
//   }
//   console.log(sum);
// }

// sum([1, 2, 3, 4, 5]);

// 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

function smallest(numbers) {
  var index = 2;
  var number1 = numbers[0];
  var number2 = numbers[1];
  if (number1 > number2) {
    number1, (number2 = number2), number1;
  }
  while (index < numbers.length) {
    if (numbers[index] < number2) {
      if (numbers[index] < number1) {
        number2 = number1;
        number1 = numbers[index];
      } else {
        number2 = numbers[index];
      }
    }
    index += 1;
  }
  console.log(number1);
  console.log(number2);
}

smallest([1, 7, 6, 3, 20, 17, 1, 50, 69, 1, 0, 18]);
