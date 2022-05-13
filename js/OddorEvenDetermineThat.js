function oddOrEven(n) {
    let num = n / 2
    if (num % 2 === 0){
      return 'Even'
    }if (num % 2 === 1){
      return 'Odd'
    }else{
      return 'Either'
    }
  }