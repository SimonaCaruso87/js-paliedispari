/*
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/ 

//Definiamo una funzione e utilizziamola
function palindroma(parola)
{
    //split()prende un modello e divide a Stringin un elenco ordinato di sottostringhe cercando il modello, inserisce queste sottostringhe in un array e restituisce l'array.
    let parola_split = parola.split('')
    //Il reverse()metodo legge la lengthproprietà di this. Quindi visita ogni indice compreso tra 0e length / 2e scambia i due indici corrispondenti su entrambe le estremità, eliminando le proprietà se necessario.
    let parola_reverse = parola_split.reverse();
    //Il join()metodo crea e restituisce una nuova stringa concatenando tutti gli elementi in un array
    let parola_join = parola_reverse.join('');


    //stampa
    console.log(parola_split);
    console.log(parola_reverse);
    console.log(parola_join);

    if (parola === parola_join) {
        return true
    }
    else {
        return false
    }
};

//Chiedere all'utente di inserire una parola

let word = prompt('Inserisci una parola');

let result = palindroma(word);

//Se la parola è palindroma esegui l'alert Palindroma
if (result) {
    alert(`${word} è una parola palindroma`)
}
//oppure esegui alert non è palindroma
else {
    alert(`${word} non è una parola palindroma`)
}

