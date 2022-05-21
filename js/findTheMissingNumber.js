function missingNo(nums) {
    let sorted = nums.sort(function(a, b){return a - b})
    let arr = []
    console.log(sorted)
    for (let i = 0; i <= 100; i++){
      arr.push(i)
    }
    console.log(arr)
    let result = arr.filter(item => sorted.indexOf(item) === -1)
    return result.pop()
  }