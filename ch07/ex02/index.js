function fizzbuzz(n) {
  Array.from({ length: n }, (_, i) => i + 1)
    .forEach(i => {
      const output = i % 15 === 0 ? "FizzBuzz" :
                    i % 3 === 0 ? "Fizz" :
                    i % 5 === 0 ? "Buzz" : i;
      console.log(output);
    });
}

function sumOfSquaredDifference(f, g) {
  return f
    .map((value, i) => (value - g[i]) ** 2)
    .reduce((sum, squaredDiff) => sum + squaredDiff, 0);
}

function sumOfEvensIsLargerThan42(array) {
  return array
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0) >= 42;
}

console.log("\nfizzbuzz(15):");
fizzbuzz(15);

// sumOfSquaredDifference
console.log("sumOfSquaredDifference:");
console.log(sumOfSquaredDifference([1, 2, 3], [4, 5, 6])); // 27 
console.log(sumOfSquaredDifference([0, 0], [3, 4])); // 25 

// sumOfEvensIsLargerThan42
console.log("sumOfEvensIsLargerThan42:");
console.log(sumOfEvensIsLargerThan42([10, 20, 30])); // true 
console.log(sumOfEvensIsLargerThan42([1, 3, 5, 10])); // false 