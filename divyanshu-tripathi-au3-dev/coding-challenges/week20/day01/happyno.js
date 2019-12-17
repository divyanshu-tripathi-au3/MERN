// A happy number is a number defined by the following process: Starting with any positive integer, 
// replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers.


function add(n) {
    let ans = 0;
    while(n) {
      ans += (n % 10) * (n % 10);
      n /= 10;
      n = parseInt(n.toString());
    }
    return ans;
  }
  
  const isHappy = function(n) {
    hash = [];
    while(n) {
      if (n === 1) return true;
      if (hash[n]) return false;
      hash[n] = true;
      n = add(n);
    }  
  };

  console.log(isHappy(23))
  console.log(isHappy(12))