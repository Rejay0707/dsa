// //1.print odd numbers
// const printOddNumbers = (n) => {
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// };

// printOddNumbers(15);

// //Print Even numers
// function printEvenNumbers(n) {
//   for (let i = 0; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }
// }

// printEvenNumbers(10);

// //2.Grading System
const Grading = {
  Grade_A: { min: 90, max: 100 },
  Grade_B: { min: 80, max: 89 },
  Grade_C: { min: 70, max: 79 },
  Grade_D: { min: 60, max: 69 },
  Grade_E: { min: 0, max: 59 },
};
function gradeSetUp(mark) {
  for (let grading in Grading) {
    if (mark >= Grading[grading].min && mark <= Grading[grading].max) {
      return grading;
    }
  }
}

// //3.Age group categorizer
// const AGE_GROUPS = {
//   children: { min: 0, max: 12 },
//   teenagers: { min: 13, max: 19 },
//   adults: { min: 20, max: Infinity },
// };

// function categorizeAge(age) {
//   for (let group in AGE_GROUPS) {
//     if (age >= AGE_GROUPS[group].min && age <= AGE_GROUPS[group].max) {
//       return group;
//     }
//   }

//   return "Unknown";
// }

// console.log(gradeSetUp(60));

// //Anagram
// const isAnagram = function (s, t) {
//   if (s.length !== t.length) return false;

//   const obj1 = {};
//   const obj2 = {};

//   for (let i = 0; i <= s.length; i++) {
//     obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//     obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//   }

//   for (const key in obj1) {
//     if (obj1[key] !== obj2[key]);
//     console.log(false);
//   }
//   console.log(true);
// };

// isAnagram("anagram", "nagaram");

// //fibinocii series

// const fib = function (n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//     console.log(arr[i]);
//   }
//   console.log(arr[n]);
// };

// fib(5);

const factorsOfTheNumber = (n) => {
  let res = [];
  let i = 1;

  while (i <= n) {
    if (n % i === 0) {
      res.push(i);
    }
    i++;
  }

  // console.log(res);
};

factorsOfTheNumber(12);

//33.isPrime Number

const isPrime1 = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// console.log(isPrime1(6));
// console.log(isPrime1(7));

//34.isPerfect Number

const isPerfectNumber = (n) => {
  if (n <= 1) return false;

  let sum = 0;

  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
};

// console.log(isPerfectNumber(6));
// console.log(isPerfectNumber(28));
// console.log(isPerfectNumber(496));
// console.log(isPerfectNumber(12));

//19. Series 3,5,7,9,11...
const series = (n) => {
  let series = [];
  let current = 3;

  for (let i = 0; i < n; i++) {
    series.push(current);
    current += 2;
  }

  return series;
};

// console.log(series(5));
// console.log(series(10));

//20. Series 2,5,8,11,14..
const series1 = (n) => {
  let series = [];
  let current = 2;

  for (let i = 0; i < n; i++) {
    series.push(current);
    current += 3;
  }
  return series;
};

// console.log(series1(10))
// console.log(series1(5))

//21.Series 3,6,12,24,48..
const series2 = (n) => {
  let series = [];
  let current = 3;
  for (let i = 0; i < n; i++) {
    series.push(current);
    current *= 2;
  }
  return series;
};
// console.log(series2(5))
// console.log(series2(10))

//22.Sum of first n natural numbers

const sumOfNaturalNumbers = (n) => {
  if (n < 1) return 0;
  return (n * (n + 1)) / 2;
};

// console.log(sumOfNaturalNumbers(5));
// console.log(sumOfNaturalNumbers(10));
// console.log(sumOfNaturalNumbers(100));

//23.Factorial of a number

const factorialIterative = (n) => {
  if (n < 0) return -1;
  if (n === 0 || n === 1) return 1;

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

// console.log(factorialIterative(5));
// console.log(factorialIterative(0));
// console.log(factorialIterative(10));

//Counting digits in a number

const countDigits = (n) => {
  n = Math.abs(n);
  return n.toString().length;
};
// console.log(countDigits(-12321));

//29.GCD(Greatest Common Divisor)

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

// console.log(gcd(48, 18));
// console.log(gcd(101, 103));
// console.log(gcd(56, 98));

//30.LCM (Least Common Multiple)
const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
};

// console.log(lcm(12, 18));
// console.log(lcm(4, 6));
// console.log(lcm(15, 25));

//31.Binary to decimal
// Function to convert binary to decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

let binary = "1101";
let decimal = binaryToDecimal(binary);

// console.log(`Binary ${binary} is equal to Decimal ${decimal}`);

//35.is Armstrong number
function isArmstrong(n) {
  const numStr = n.toString();
  const numDigits = numStr.length;
  let sum = 0;

  for (let i = 0; i < numDigits; i++) {
    const digit = parseInt(numStr[i]);
    sum += Math.pow(digit, numDigits);
  }

  return sum === n;
}
// console.log(isArmstrong(371));
// console.log(isArmstrong(123));
// console.log(isArmstrong(153));
// console.log(isArmstrong(407));

//36.star pattern 1
const printStarPattern = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    // console.log(row);
  }
};

printStarPattern(5);

//37.star pattern 2
function printStarPattern2(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "* ";
    }
    // console.log(row);
  }
}

printStarPattern2(5);

//38.star paatern 3
const printStarPattern3 = (n) => {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    // console.log(row);
  }
  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    // console.log(row);
  }
};

printStarPattern3(5);

//39.star pattern 4

function printStarPattern4(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    // console.log(row);
  }
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= n - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    // console.log(row);
  }
}

printStarPattern4(5);

//40.first n prime numbers
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function firstNPrimes(n) {
  const primes = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
}

const n = 10;
const primes = firstNPrimes(n);
// console.log(primes);

//41.square each array elements

const squareArr = (n) => {
  const squaredArr1 = n.map((x) => x ** 2);
  // console.log(squaredArr1)
};

squareArr([1, 2, 3, 4]);

//42.odd or even -each array element

const oddOrEven = (n) => {
  const result = n.map((x) => (x % 2 === 0 ? "even" : "odd"));
  // console.log(result)
};
oddOrEven([1, 2, 3, 4]);

//43. odd count in an array

const oddCount = (array) => {
  let count = 0;
  array.forEach((num) => {
    if (num % 2 !== 0) {
      count++;
    }
  });
  // console.log(count)
};
oddCount([1, 2, 3, 4, 5, 6, 7]);

//44.Number count in an array

const numberCount = (n) => {
  let count = 0;
  n.forEach((num) => {
    if (typeof num === "number") {
      count++;
    }
  });
  // console.log(count)
};
numberCount([1, "a", 3, "b", 5, true, 7, null, 4, 3, 2]);

//45.sum of elements in an array

const sumOfElements = (array) => {
  return array.reduce((sum, current) => sum + current, 0);
};

const result = sumOfElements([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(result);

//46.avarage of element in an array
const findAverage = (n) => {
  const sum = n.reduce((sum, current) => sum + current, 0);
  const result = sum / n.length;
  // console.log(result)
};
findAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//47.product of elements in an array
const productOfElements = (n) => {
  // console.log(n.reduce((product,current)=>product*current,1))
};
productOfElements([1, 2, 3, 4, 5]);

//48.Minimum in an array
const findMinimum = (n) => {
  const min = Math.min(...n);
  // console.log(min)
};
findMinimum([8, 3, 1, 5]);

//49.Minimum index in an array

const findMinimumIndex = (n) => {
  let minIndex = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < n[minIndex]) {
      minIndex = i;
    }
  }
  // console.log(minIndex)
};
findMinimumIndex([9, 3, 7, 4, 1]);

//50.Maximum sum of two consecutive elements

const maxSumOfTwoConsecutiveElements = (n) => {
  if (n.length < 2) return null;
  let max = n[0] + n[1];
  for (let i = 1; i < n.length - 1; i++) {
    let currentSum = n[i] + n[i + 1];
    if (currentSum > max) {
      max = currentSum;
    }
  }
  return max;
};
// console.log(maxSumOfTwoConsecutiveElements([5, 2, 9, 1, 5, 6]));

//
const containsDuplicate = function (nums) {
  const result = new Set(nums);
  // console.log(result)
};
containsDuplicate([1, 2, 1, 3]);

//51.count elements until negective
const countUntilNegective = (n) => {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) break;
    count++;
  }
  // console.log(count);
};
countUntilNegective([1, 4, 7, 9, -5, 9]);

//52. sum until zero
function sumUntilZero(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      return i + 1;
    }
  }
  return -1;
}

const arr = [3, 2, -5, 1, 4, -2, 3];
const result1 = sumUntilZero(arr);
// console.log(result1);

//53.linear search

function linearSearch(arr5, target) {
  for (let i = 0; i < arr5.length; i++) {
    if (arr5[i] === target) {
      return i;
    }
  }
  return -1;
}
const arr5 = [3, 1, 4, 1, 5, 9, 2, 6];
const target = 6;
const result3 = linearSearch(arr5, target);
// console.log(`Index of ${target}: ${result3}`);

//54.Check Array for Negective Numbers

const findNegectiveNumbers = (arr) => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      res.push(arr[i]);
    }
  }
  // console.log(res);
};

findNegectiveNumbers([-2, -4, 3, -9]);

//55.check array for ascending order
const checkAscendingOrder = (arr) => {
  arr.sort((a, b) => a - b);
  // console.log(arr)
};
checkAscendingOrder([4, 2, 7, 5, 6]);

//57.first greater element than k
const greaterElement = (arr, k) => {
  const greaterArrays = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > k) {
      greaterArrays.push(arr[i]);
    }
    const order = greaterArrays;
    order.sort((a, b) => a - b);
    // console.log(order)
    var result = order[0];
  }
  // console.log(result)
};
greaterElement([6, 8, 12, 6, 9, 7, 11], 8);

//59.Reverse an array
function reverseArray(arr) {
  // console.log(arr.slice().reverse());
}

reverseArray([1, 2, 3, 4]);
//61.max frequency in an array
function maxFrequency(arr) {
  const freqMap = {};
  let maxFreq = 0;
  let maxFreqElement;

  for (const element of arr) {
    freqMap[element] = (freqMap[element] || 0) + 1;
    if (freqMap[element] > maxFreq) {
      maxFreq = freqMap[element];
      maxFreqElement = element;
    }
  }

  return { element: maxFreqElement, frequency: maxFreq };
}
// console.log(maxFrequency([1,2,2,2,2,2,3,3,3,4,4,4,4]))

//63.sum of array except self
function sumExceptSelf(arr) {
  const n = arr.length;
  const output = new Array(n);

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    output[i] = sum;
  }

  // console.log(output);
}
sumExceptSelf([1, 2, 3, 4]);

//64.frequeny of each element in an array

function frequencyCount(arr) {
  return arr.reduce((freqMap, element) => {
    freqMap[element] = (freqMap[element] || 0) + 1;
    return freqMap;
  }, {});
}
//console.log(frequencyCount([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));

//65.sum of all difference between pairs
function sumOfDifferences(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      sum += Math.abs(arr[i] - arr[j]);
    }
  }
  return sum;
}
// console.log(sumOfDifferences([1,2,3,4]))

//66.Find All Pairs with a Given Sum
function findPairs(arr, targetSum) {
  const pairs = [];
  const seen = new Set();
  for (const num of arr) {
    const complement = targetSum - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }
  return pairs;
}
// console.log(findPairs([1,2,3,4,5],6))

//67.first repeat in an array
function firstRepeat(arr) {
  const freqMap = {};
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (freqMap[element]) {
      return element;
    }
    freqMap[element] = 1;
  }
  return null; // no repeat found
}
// console.log(firstRepeat([1,3,2,4,5,4]))

//69.check for a subarray in an array
function hasSubarray(arr, subarray) {
  const arrStr = arr.join(",");
  const subarrayStr = subarray.join(",");
  return arrStr.includes(subarrayStr);
}

// console.log(hasSubarray([1,,2,3,4,5], [2,3,4]));
// console.log(hasSubarray([1,2,3,4,5],[6,7,8]));

//70.Common elements in two arrays
function commonElements(arr1, arr2) {
  // console.log(arr1.filter(element => arr2.includes(element)));
}
commonElements([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]);

//71.find all subarrays of an array
function getAllSubarrays(arr) {
  const subarrays = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      subarrays.push(arr.slice(i, j));
    }
  }
  return subarrays;
}
// console.log(getAllSubarrays([1,2,3,4]))

//72.sum of subarrays
function sumOfSubarrays(arr) {
  let totalSum = 0;

  // Calculate sum of all subarrays
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      const subArray = arr.slice(i, j + 1);
      // console.log(subArray)
      const subArraySum = subArray.reduce((acc, curr) => acc + curr, 0);
      totalSum += subArraySum;
    }
  }

  // console.log(totalSum)
}

sumOfSubarrays([1, 2, 3, 4, 5]);

//73.count vowels and consonants
function countVowelsAndConsonants(str) {
  let vowels = 0;
  let consonants = 0;
  for (let char of str.toLowerCase()) {
    if (char.match(/[aeiou]/)) {
      vowels++;
    } else if (char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
      consonants++;
    }
  }
  // console.log({ vowels, consonants });
}
countVowelsAndConsonants("hello guys");

//74.character count in a string
const str1 = "Hello, World!";
const charCount = str1.replace(/[^a-zA-Z0-9]/g, "").length;
// console.log(charCount);

//76.Remove duplicate characters
function removeDuplicates(s) {
  return [...new Set(s)].join("");
}
// console.log(removeDuplicates('hello'))

//77.capitalize the nth character
function capitalizeNthChar(s, n) {
  // Ensure n is within bounds
  if (n >= 0 && n < s.length) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (i === n) {
        result += s[i].toUpperCase();
      } else {
        result += s[i].toLowerCase();
      }
    }
    // console.log(result)
  } else {
    return "Error: Index out of range";
  }
}

capitalizeNthChar("hello world!", 8);

//77.search a character in a string
const str = "Hello World";
const char = "o";
if (str.includes(char)) {
  // console.log(`Character '${char}' found`);
} else {
  // console.log(`Character '${char}' not found`);
}

//78.Search a word in a sentence
const sentence = "Hello, I am learning JavaScript today.";
const wordToFind = "am";

const position = sentence.search(new RegExp(wordToFind));

if (position !== -1) {
  // console.log(`The word "${wordToFind}" was found at position ${position}.`);
} else {
  // console.log(`The word "${wordToFind}" was not found.`);
}

