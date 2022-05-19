// REWORKED CODE AGAIN. BEST SOLUTION
function mygcd(x,y){
  //your code here
  while (y > 0){
    let temp = y
    y = x % y
    x = temp
  }
  return x
}



// function mygcd(x,y){
//   //your code here
//   let result = 0
//   if (x > y){
//     for (let i = y; i >= 0; i--){
//       if (x % i === 0 && y % i === 0){
//         result += i
//         break;
//       }
//     } 
//   }
//   if (y > x){
//       for (let i = x; i >= 0; i--){
//         if (x % i === 0 && y % i === 0){
//           result += i
//           break;
//         }
//       }
//     }
//   if (x === y){
//     for (let i = 0; i <= x; i++){
//       if (x % i === 0){
//         result += i
//       }
//     }
//   }
//   return result
// }


// PREVIOUS SOLUTION. I have improved it.
// function mygcd(x,y){
//     //your code here
//     let resultArray = []
//     if (x > y){
//       for (let i = 0; i <= y; i++){
//         if (x % i === 0 && y % i === 0){
//           resultArray.push(i)
//         }
//       } 
//     }
//     if (y > x){
//         for (let i = 0; i <= x; i++){
//           if (x % i === 0 && y % i === 0){
//             resultArray.push(i)
//           }
//         }
//       }
//     if (x === y){
//       for (let i = 0; i <= x; i++){
//         if (x % i === 0){
//           resultArray.push(i)
//         }
//       }
//     }
//     let largest = resultArray.pop()
//   //   let largest = Math.max(...resultArray)
//     console.log(largest)
//     return largest
//   }