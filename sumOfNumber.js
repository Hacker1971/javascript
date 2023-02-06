//1+2+3+4+5+6+7

// function sumOf(number){
//     let sum = 0 ;
// for(let i= 1; i<=number; i++){
//     sum += i;
//     console.log(i,sum);
// }
// return sum;
// }
//  sumOf(8);

//*1*2*3*4*5*6*7

// function multi(number){
//     let result = 1;
//     for(let i= 1 ; i <=number; i++){
//         result = result * i;
//     }
//     return result;
// }
// multi(6);


// function hTom(hour){
//     return hour * 60;
// }
//  console.log(hTom(1));
// function convertHoursToMinutes(hours) {
//     return Math.floor(hours * 60);
// }
// let hours = 24.5;
// let minutes = convertHoursToMinutes(hours);
// console.log("javascript convert hours to minutes: " + minutes);

// let callbackTime = minutes - 15;
// console.log(callbackTime + " minutes");
// let callBack = callbackTime / 60;
// console.log(callBack + " hours");


// function findArea( length, width ) {
//     return length * width;
    
//     }
//     console.log(findArea(10,5));
// function findMax(a,b,c){
//     if(a>b && a>c){
//         return a;
//     }else if (b> a && b> c){
//         return b;
//     }else{
//         return c;
//     }
    
//     } 
//     let a=55;
//     let b=10;
//     let c = 95;
//     const avrage = findMax(a,b,c);
//     console.log("bigNumber:", avrage);


// function findTallest(heights) {
//     let tallest = 0;
//     for (let i = 0; i < heights.length; i++) {
//       if (heights[i] > tallest) {
//         tallest = heights[i];
//       }
//     }
//     return tallest;
//   }
//   let heights = [180, 170, 165, 175, 185, 192];
//   let tallest = findTallest(heights);
//   console.log("Tallest person's height: ", tallest, "cm");

// function tallestFriend ( height ) {
//     let tallest = 0;
//   for (let i = 0; i < height.length; i++) {
//     const element = height[i];
//     if(element > tallest){

//     }
    
//   }
//     }

// function findTallest(heights) {
//     let tallest = 0;
//     for (let i = 0; i < heights.length; i++) {
//       if (heights[i] < tallest) {
//         tallest = heights[i];
//       }
//     }
//     return tallest;
//   }
//   let heights = [157, 134, 188];
//   let tallest = findTallest(heights);
//   console.log("Tallest person's height: ", tallest, "cm");
function findSmallest(numbers) {
    let smallest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
      }
    }
    return smallest;
  }
  
  let numbers = [10, 33, 5, 99, 6];
let smallest = findSmallest(numbers);
console.log("Smallest element: ", smallest);

    
    