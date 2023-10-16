function contaPariDispari(array) {
    let pari = 0;
    let dispari = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        pari++;
      } else {
        dispari++;
      }
    }
  
    return { pari, dispari };
  }