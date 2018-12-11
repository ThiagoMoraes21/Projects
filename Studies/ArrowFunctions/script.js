 
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */

function modifyArray(nums) {
    // let arr = nums;
    // let newArr = [];
    // arr.forEach((e) => {
    //     if (e % 2 === 0) {
    //         e *= 2;
    //         newArr.push(e);
    //     } else {
    //         e *= 3;
    //         newArr.push(e);
    //     }
    // });
    // return newArr;
 
   // Using Arrow function to make it shorter
   return nums.map(n => n = (n % 2 === 0) ? n * 2 : n * 3);
}
