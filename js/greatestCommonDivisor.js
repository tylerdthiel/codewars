function mygcd(x,y){
    //your code here
    let resultArray = []
    if (x > y){
      for (let i = 0; i <= y; i++){
        if (x % i === 0 && y % i === 0){
          resultArray.push(i)
        }
      } 
    }
    if (y > x){
        for (let i = 0; i <= x; i++){
          if (x % i === 0 && y % i === 0){
            resultArray.push(i)
          }
        }
      }
    if (x === y){
      for (let i = 0; i <= x; i++){
        if (x % i === 0){
          resultArray.push(i)
        }
      }
    }
    let largest = resultArray.pop()
  //   let largest = Math.max(...resultArray)
    console.log(largest)
    return largest
  }