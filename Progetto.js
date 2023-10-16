const reverseString = (string) => string.split('').reverse().join('');

console.log(reverseString('Floridia'));





function contaNumeriPari(array) {
    // Usa il metodo `filter` per creare un nuovo array contenente solo i numeri pari, quindi calcola la lunghezza di questo array.
    const numeriPari = array.filter(numero => numero % 2 === 0);
    return numeriPari.length;
}

// Esempio di utilizzo:
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const quantitaNumeriPari = contaNumeriPari(numeri);
console.log(quantitaNumeriPari); // Output: 4




const arr2 = [1, 2, 3, 4, 5];
const sommaArray = arr => arr.reduce((acc, numero) => acc + numero, 0);
console.log(sommaArray(arr2));
