// Write a Javascript function that finds all prime numbers upto a number n.
// So if we call the function asfindPrimes(100), it should print all the prime numbers upto 100.
// Hints -
// You know how to check a number is prime or not. If you know it, doing the same for numbers from 1 to 100 is easy.

 function primenumber(start, end) {
    
    if (isNaN(start) || start < 1 || Math.floor(start) != start) {
      return 'plz Start with positive number';
    }
    if (isNaN(end) || end < 1 || Math.floor(end) != end) {
      return 'plz end with positive number';
    }
    if (end < start) {
      return 'end value, greater or equal to the starting value';
    }
    if (end === 1) {
      return 'end value must be > 1';
    }
  
    if (end === 2) {
      return [2];
    }
  
   
    var result = [];
    if (start === 1) {
      start++;
    }
  
    
    var list = [];
    for (var i = 2; i <= end; i++) {
      list.push(i);
    }
  
  
    var len = list.length;
    for (i = 0, limit = Math.sqrt(len); i <= limit; i++) {
      if (list[i]) {
        for (var pos = i + list[i]; pos < len; pos += list[i]) {
          list[pos] = 0;
        }
      }
    }
  
    for (i = 0; i <= len; i++) {
      list[i] && result.push(list[i]);
    }
  
    
    if (start !== 2) {
      for (i = 0; i <= len; i++) {
        if (result[i] >= start) {
          return result.slice(i);
        }
      }
    }
  
    return result;
  };

  console.log(primenumber(1, 20))
  console.log(primenumber(2, 9))

//   seive method still pending to understand at my end