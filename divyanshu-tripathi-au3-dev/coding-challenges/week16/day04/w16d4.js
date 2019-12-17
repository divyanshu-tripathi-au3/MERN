// An element in a sorted array can be found in O(log n) time via binary search. 
// But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. 
// So for instance, 1 2 3 4 5 might become 3 4 5 1 2. 
// Devise a way to find an element in the rotated array in O(log n) time.

function binarysearch(array, low, high, item){

    if (low > high) return -1

    const mid = Math.floor((low + high) / 2)

    if (array[mid] === item) return mid

    if(array[low]<= array[mid]){

        if ( item >= array[low] && item <= array[mid])
            return binarysearch(array, low, mid-1, item)
        else
            return binarysearch(array, mid+1, high, item) 

    }else {

        if ( item >= array[mid] && item <= array[high])
        return binarysearch(array, mid+1, high, item)
    else
        return binarysearch(array, low, mid-1, item) 
    }

}

console.log(binarysearch([3, 4, 5, 1, 2], 0, 4, 4))