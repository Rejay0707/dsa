//Anagram
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i <= s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]);
    console.log(false);
  }
  console.log(true);
};

isAnagram("anagram", "nagaram");

//fibinocii series

const fib = function (n) {
    const arr = [0, 1];
  
    for (let i = 2; i <= n; i++) {
      arr.push(arr[i - 1] + arr[i - 2]);
      console.log(arr[i]);
    }
    console.log(arr[n]);
  };
  
  fib(5);

  
