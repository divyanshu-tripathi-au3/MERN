// Given an array of characters where each character represents a fruit tree, 
// you are given two baskets and your goal is to put maximum number of fruits in each basket. 
// The only restriction is that each basket can have only one type of fruit.
// You can start with any tree, but once you have started you can’t skip a tree. 
// You will pick one fruit from each tree until you cannot, 
// i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both the baskets.
// Input: Fruit=['A', 'B', 'C', 'A', 'C']
// Output: 3
// Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
// Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
// Output: 5
// Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
// This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

function fruits_into_baskets(fruits) {
    let Start = 0,
      maxLength = 0,
      fruitFrequency = {};
  
   
    for (let End = 0; End < fruits.length; End++) {
      const rightFruit = fruits[End];
      if (!(rightFruit in fruitFrequency)) {
        fruitFrequency[rightFruit] = 0;
      }
      fruitFrequency[rightFruit] += 1;
  
      
      while (Object.keys(fruitFrequency).length > 2) {
        const leftFruit = fruits[Start];
        fruitFrequency[leftFruit] -= 1;
        if (fruitFrequency[leftFruit] === 0) {
          delete fruitFrequency[leftFruit];
        }
        Start += 1; 
      }
      maxLength = Math.max(maxLength, End - Start + 1);
    }
  
    return maxLength;
  }
  
  
  console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
  console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));