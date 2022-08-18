function isPythagoreanTriple(integers) {
    // Good luck friends!
    let sorted = integers.sort(function(a, b){return a - b})
    console.log(sorted)
    if (Math.pow(sorted[2], 2) === (Math.pow(sorted[0], 2) + Math.pow(sorted[1], 2))){
      return true
    }else {
      return false
    }
  }