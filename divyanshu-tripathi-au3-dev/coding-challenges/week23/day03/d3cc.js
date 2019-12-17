// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.
// Examples input/output:
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function findthenoofXO(str) {
    let countofX = 0;
    let countofO = 0;

    for(let i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === "x"){
        countofX = countofX + 1
      }
        if(str[i].toLowerCase() === "o"){
            countofO = countofO + 1
      }
    }
    if(countofX === countofO || countofX === 0 && countofO === 0){
      return true
    }
    else{
      return false 
    }
  }
  
  console.log(findthenoofXO("ooxx"));  
  console.log(findthenoofXO('xooxx'));  
  console.log(findthenoofXO("ooxXm"));  
  console.log(findthenoofXO("zpzpzpp")); 
  console.log(findthenoofXO("zzoo"));  

