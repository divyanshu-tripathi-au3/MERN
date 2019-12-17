// Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.
// Input matrix
// 0 1 1 1
// 0 0 1 1
// 1 1 1 1  // this row has maximum 1s
// 0 0 0 0
// Output: 2

const ones =  array => array.reduce((acc, item) => acc + item)

const count = array => array.reduce((prev, item, index, arr)=> 
    ones(item) > ones(arr[prev]) ? index : prev,
    0
)

console.log(count([[0, 1, 1, 1],[0, 0, 1, 1], [1, 1, 1, 1],[0, 0, 0, 0]]))


