function dontGiveMeFive(start, end){
    let result = 0
    for (let i = start; i <= end; i++){
      console.log(i)
      if (!i.toString().includes(5)){
        result++
      }
    }
    return result
  }