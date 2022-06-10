function solution(str, ending){
  //   reverse the two strings so the endings line up
    let last1 = str.split('').reverse().join('')
    let last2 = ending.split('').reverse().join('')
  //   create a new variable that will hold the ending of the first string equal to the length of the second string
    let final = ''
    for (let i = 0; i < last2.length; i++){
      final += last1[i]
    }
  // check to see if the two strings match up
    if (last2 === final){
      return true
    }else{
      return false
    }
  }

//   BETTER SOLUTION
function solution(str, ending){
    return str.endsWith(ending);
  }

//   did not know that .endWith was a method. learn something new everyday...