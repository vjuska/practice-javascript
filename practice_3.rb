# def sum(numbers)
#   index = 0
#   sum = 0
#   while index < numbers.length
#     sum = sum + numbers[index]
#     index += 1
#   end
#   p sum
# end

# sum([1, 2, 3, 4, 5])

# def smallest(strings)
#   index = 1
#   stored = strings[0]
#   while index < strings.length
#     if stored.length > strings[index].length
#       stored = strings[index]
#     end
#     index += 1
#   end
#   p stored
# end

# smallest(["will", "vic", "hello", "goodbye"])

# def reverse(numbers)
#   index = numbers.length - 1
#   reverse_numbers = []
#   while index >= 0
#     reverse_numbers << numbers[index]
#     index -= 1
#   end
#   p reverse_numbers
# end

# reverse([1, 2, 3, 4, 5])

# def aword(strings)
#   awords = 0
#   index = 0
#   while index < strings.length
#     if strings[index][0].downcase == "a"
#       awords += 1
#     end
#     index += 1
#   end
#   p awords
# end

# aword(["will", "vic", "hello", "goodbye", "alex", "apple"])

# def combined(strings)
#   index = 1
#   string = strings[0].to_s
#   while index < strings.length
#     string = string + "," + strings[index].to_s
#     index += 1
#   end
#   p string
# end

# combined(["will", "vic", "hello", "goodbye", "alex", "apple", 1])

# def sum(numbers)
#   index = 0
#   sum = 0
#   while index < numbers.length
#     sum = sum + numbers[index]
#     index += 1
#   end
#   p sum
# end

# sum([1, 2, 3, 4, 5])

# 6) Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other).

# def sum(numbers)
#   index = 0
#   sum = 1
#   while index < numbers.length
#     sum = sum * numbers[index]
#     index += 1
#   end
#   p sum
# end

# sum([1, 2, 3, 4, 5])

# 7) Write a function that takes in an array of numbers and returns the two smallest numbers.

# def smallest(numbers)
#   index = 2
#   number1 = numbers[0]
#   number2 = numbers[1]
#   if number1 > number2
#     number1, number2 = number2, number1
#   end
#   while index < numbers.length
#     if numbers[index] < number2
#       if numbers[index] < number1
#         number2 = number1
#         number1 = numbers[index]
#       else
#         number2 = numbers[index]
#       end
#     end
#     index += 1
#   end
#   p number1
#   p number2
# end

# smallest([1, 7, 6, 3, 20, 17, 1, 50, 69, 1, 0, 18])

# 8) Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

def zero(numbers)
  store = 0
  index = 0
  while index < numbers.length
    index2 = 0
    (numbers[index].to_s.length).times do
      if numbers[index].to_s[index2] == "0"
        store += 1
      end
      index2 += 1
    end
    index += 1
  end
  p store
end

zero([10, 7, 600, 3, 20, 107, 1, 50, 69, 1, 0, 18])
