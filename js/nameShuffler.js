function nameShuffler(str){
    //Shuffle It
    let name = str.split(' ')
    let result = name.reverse().join(' ')
    return result.toString()
  }