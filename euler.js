//  Find the sum of all the multiplesof 3 and 5 below 100
// Answer

// sum of multiple of 3 
// sum of multiple of 5 
// sum the sum of two numbers  
// the numbers includes 0 and 100 non-inclusive
//sum of multiple of 3  sum = 
//sum of multiple of 5  sum = 
// the sum of two nubers =



// const findSum = n => {
//     let countArr = []
    
//     for(let i = 1; i <= 1000; i++) 

//     if(i % 3 === 0 || i % 5 === 0) 
//      countArr.push(i) 

//     return countArr.reduce((acc , curr) => acc + curr)
//   }
//   console.log(findSum(1000));

// second methode
//   function multiples(n) {
//     let sum = 0;
//     for (let i = 1; i < 1000; i++) {
  
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   console.log( multiples(1000) );
//   console.log( multiples(5) );
//   console.log( multiples(6) );
// ===============================
// 2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// function fibonacci(num){
//     var a = 1, b = 0, c;
  
//     while (num >= 0){
//       c = a;
//       a = a + b;
//       b = c;
//       num--;
//     }
  
//     return b;
//   }
//   fibonacci(200)
// ==========================

// function countdown(num){
//  console.log(num);
//      if (num<=1){
//         return 0
//      }else{
//         return countdown(num-1)
//     }
// }
// countdown(5);
// countdown(100);
// =====================

