// Given a string, find all of its permutations preserving the character sequence but changing case.
// Input: "ad52"
// Output: "ad52", "Ad52", "aD52", "AD52"
// Input: "ab7c"
// Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"




var permutation = function(S) {
    let res = new Set()
    
    S.split('').forEach(c => {
        if (res.size === 0) {
            res.add(c.toUpperCase())
            res.add(c.toLowerCase())
        } else {
            temp = new Set()
            res.forEach(v => {
                temp.add(v + c.toUpperCase())
                temp.add(v + c.toLowerCase())
            })
            res = temp
        }
    })
    
    res.add(S)
    return Array.from(res)
};

console.log(permutation('ad52'))
console.log(permutation('ab7c'))