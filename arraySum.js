// write a recursive function that sums all items in an array of integers
// the array or may not contain nested arras of integers

// Example:
// let arr1=[-9,2,3,-5,20]; // =>11
// let arr2=[1,2,[3,4,[5]],6]; // =>21

// function multiArraySum(arr) {
//   let total = 0;
//   for(i=0;i<arr.length;i++){
//     total += arr[i];
//   } return total;
// }
// let test1 = multiArraySum(arr1)
// console.log(test1);



// const arr = [5,7,[ 4, [2], 8, [1,3], 2 ],[ 9, [] ],1,8];
// const findNestedSum = (arr) => {
//   let sum = 0;
//   for(let len = 0; len < arr.length; len++){
//      sum += Array.isArray(arr[len]) ? findNestedSum(arr[len]) :
//      arr[len];
//   };
//   return sum;
// };
// console.log(findNestedSum(arr));
// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.

// function sumNums(num){
//   let sum = 0;
//   console.log(num)
//   if(num<=1){
//     return num;
//   }else{
//     sum = num + sumNums(num-1)//here is recusion happens.
//     return sum
    
//   } 
// }
// console.log(sumNums(2))
// sumNums(sum);

// function sumNums(num){
//   let sum = 0;
//   for(let i = 1; i<=num;i++){
//     sum+=sumNums()
//   }
// }
// ======================
// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.

// countVowels('Four score and seven years'); // => 9

// function countVowels(string){
//   if(string!=vowels){
//     return string

//   }else{
//     return vowels;
//   }
// }

// function vowel_count(str)
// {
//   let vowel_list = 'aeiouAEIOU';
//   let vowel_count = 0;
  
//   for(var x = 0; x < str.length ; x++)
//   {
//     if (vowel_list.indexOf(str[x]) !== -1)
//     {
//       vowel_count += 1;
//     }
  
//   }
//   return vowel_count;
// }
// console.log(vowel_count("The quick brown fox"));



// function reverse(array){
//     var output = [];
//     for (var i = 0; i<= array.length; i++){
//         output.push(array.pop());
//     }

//     return output;
// }

// console.log(reverse([1,2,3,4,5,6,7]));

// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array.
// Use recursion. Don’t mutate the original array.

// let arr = [1,2,3,4];
// let reversedArr = reversedArr(arr);

// console.log(reversedArr) // [4,3,2,1]
// console.log(arr) // [1,2,3,4]


// function reverseArray(arr){
//   let arr =[1,2,3,4];
//   let reversedArr = reverseArray(arr);
//   console.log(reversedArr)
//   let newArray = [...reverseArray].reverse()
// }
// console.log(reverseArray[1,2,3,4,5]);


// function reverseArray(arNum){
//   if(arNum.length==0){
//     return "nothing"
//   }else{
//     console.log("Array number:",arNum.pop())
//     return reverseArray(arNum)
//   }
// }
// let arr= [1,2,3,4];
// let reversedArr= reverseArray(arr);
// console.log(reversedArr);
// console.log(arr);

// ================================================================
// Write a function, sumDigits, that sums up all the digits of a number passed in as an argument.
// You can assume that the argument will be a positive integer. Use recursion.

// sumDigits(1234) // => 10
// function sumDigits(num) {
//   if(num ==0){
//     return 0;
//   }else{
//     return (num%10) + sumDigits(num/10)
//   }
// }
// console.log(sumDigits(2244));



// function factorial(n){
//   if(n==1 || n==0){  // base casese which is the factorial stop working when n=1 and n=0;
//   return 1;
//   }
//   else return n * factorial(n-1); // recursive casese when factorial function get called here.
// }
// console.log(factorial(4));

// ================================================================
// sum of numbers start from 0 upto any number of digits
// function sum(n) {
//   if(n==0){
//     return 0;
//   }else{
//     return n + sum(n-1);
//   }

// }
// console.log(sum(0));
// ===========================

// function isBadVersion(i) {
//     let arr=[1,2,3,4,5,6,7,8,9];
//     for(let i=0; i<arr.length; i++) {
//         if(i>=4){
//             return true
//           } else
//              {
//               return false
//          } 
//     }
    
// }
// console.log(isBadVersion(3));
// const number =[1,2,3,4,5,6,7,8,]
// console.log(number.sort());

const compareNumbers = (a, b) => a - b;
const numbers = [1,2,3,4,5,6,7,9];
// numbers.sort(compareNumbers);
console.log(numbers.sort(compareNumbers));