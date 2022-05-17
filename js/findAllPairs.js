function duplicates(array){
    //Make the magic happen
      let pairCount = 0
      array.sort((a,b) => a - b)
      console.log(array)
      for (let i = 0; i < array.length; i++){
        if (array[i] === array[i + 1]){
          pairCount++
          i++
        }
      }
      return pairCount
    }