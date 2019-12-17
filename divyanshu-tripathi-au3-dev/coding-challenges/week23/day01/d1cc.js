// In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once.
//  Find the two numbers that appear only once.
// Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
// Output: [4, 6]


let singleNumber = function(nums) {
    let arr=[],
    count=0;

    nums.sort(function(a,b){return a-b})

    for(let i=0;i<nums.length;){ 
        if(nums[i]==nums[i+1])i+=2;
        else {
            arr.push(nums[i]);
            count++;
            i++;
        }
        if(count==2)return arr;
    }
};

console.log(singleNumber([1, 4, 2, 1, 3, 5, 6, 2, 3, 5]))
console.log(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 6]))