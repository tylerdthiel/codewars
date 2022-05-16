function dontGiveMeFive(start, end){
    let result = 0
    for (let i = start; i <= end; i++){
      if (!i.toString().includes(5)){
        result++
      }
    }
    return result
  }

  console.log(dontGiveMeFive(1, 100))

  console.log(dontGiveMeFive(5, 20))