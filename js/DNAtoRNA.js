function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let split = dna.split("")
    console.log(split)
    let rna = split.map(letter => {
      if (letter === 'T'){
        return 'U'
      }else{
        return letter
      }
    })
    return rna.join('')
  }