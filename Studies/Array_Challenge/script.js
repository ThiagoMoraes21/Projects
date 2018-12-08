/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
var nums = [2, 3, 6, 6, 5];

function getSecondLargest(nums) {
    // Complete the function
    let n = nums;
    n.sort((x, y) => x < y); // sorts the array in descending order
    let unique = [...new Set(n)]; // sets a new array with no duplicated data
    return unique[1]; // return second largest number
}


