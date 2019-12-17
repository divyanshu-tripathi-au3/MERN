
// Write a Javascript function that takes two arrays as an input and calculate the number of elements that belong to both of the arrays.

// For example, given two arrays - let a =[5,2,8,9,4] and let b = [3,2,9,5]`` 

// The function commonElements(a, b) should return []2, 5, 9]` because 2, 5 and 9 are common to both of the arrays.

function commonelement(arryr1, array2) {
    var d = {};
    var results = [];
    for (var i = 0; i < array2.length; i++) {
        d[array2[i]] = true;
    }
    for (var j = 0; j < arryr1.length; j++) {
        if (d[arryr1[j]]) 
            results.push(arryr1[j]);
    }
    console.log(results.sort()) ;
}

commonelement([5,2,8,9,4], [3,2,9,5])