/*Pari e Dispari
L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

function game() 
{
    let numero_user = document.getElementById('user-num').value;
    let choice_user = document.getElementById('pari-dispari').value;

    let numero_pc = Math.floor(Math.random() * 5) + 1;
    
    console.log(numero_user);
    console.log(choice_user);    
    console.log(numero_pc);

    let somma = parseInt(numero_pc) + parseInt(numero_user);

    console.log(somma);

    let risultato;

    if (somma % 2 === 0 && choice_user === 'pari') {
        return risultato = true;
    }
    else if (somma % 2 === 0 && choice_user === 'dispari') {
        return risultato = false;
    }
    else if (somma % 2 !== 0 && choice_user === 'pari') {
        return risultato = false;
    }
    else if (somma % 2 !== 0 && choice_user === 'dispari') {
        return risultato = true;
    };
};

let btn = document.getElementById('btn-controlla');
let p = document.getElementById('risultato');

btn.addEventListener ('click', function () 
{
    let value_function = game();
    
    console.log(value_function);

    if (value_function){
        p.innerText = 'User: HAI VINTO!';
    }
    else {
        p.innerText = 'User: HAI PERSO!';
    }
});