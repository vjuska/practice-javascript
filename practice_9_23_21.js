// Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

function everyOther(strings) {
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      console.log(string);
    }
    index += 1;
  });
}

everyOther(["a", "b", "c", "d", "e", "f"]);

// Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

function greatestNumber(array) {
  var currentMax = array[0];
  array.forEach(function (number) {
    if (number > currentMax) {
      currentMax = number;
    }
  });
  return currentMax;
}

console.log(greatestNumber([5, 4, 8, 1, 2]));

// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

function factorial(number) {
  var product = 1;
  while (number > 0) {
    product = product * number;
    number -= 1;
  }
  return product;
}

console.log(factorial(5));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.

// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])

function descending(numbers) {
  var result = [];
  var index = numbers.length - 1;
  while (index > 0) {
    result.push(numbers[index]);
    index -= 1;
  }
  return result;
}

console.log(descending([1, 3, 5, 7]));

// Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

// def sum_combinations(numbers1, numbers2)
//   result = []
//   numbers1.each do |number1|
//     numbers2.each do |number2|
//       result << number1 + number2
//     end
//   end
//   result
// end
// p sum_combinations([1, 5, 10], [100, 500, 1000])

function sumCombinations(numbers1, numbers2) {
  var result = [];
  numbers1.forEach(function (number1) {
    numbers2.forEach(function (number2) {
      result.push(number1 + number2);
    });
  });
  return result;
}

console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));
