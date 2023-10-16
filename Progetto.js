function invertiStringa(stringa) {
    // Dividi la stringa in un array di caratteri, inverti l'array e quindi uniscilo nuovamente in una stringa.
    return stringa.split('').reverse().join('');
}

// Esempio di utilizzo:
const stringaInvertita = invertiStringa("ciao - o ciao mamma");
console.log(stringaInvertita); // Output: "ammam o - oaic"





function contaNumeriPari(array) {
    // Usa il metodo `filter` per creare un nuovo array contenente solo i numeri pari, quindi calcola la lunghezza di questo array.
    const numeriPari = array.filter(numero => numero % 2 === 0);
    return numeriPari.length;
}

// Esempio di utilizzo:
const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const quantitaNumeriPari = contaNumeriPari(numeri);
console.log(quantitaNumeriPari); // Output: 4





function sommaArray(array) {
    // Usa il metodo `reduce` per sommare tutti gli elementi dell'array partendo da 0.
    const somma = array.reduce((acc, numero) => acc + numero, 0);
    return somma;
}
