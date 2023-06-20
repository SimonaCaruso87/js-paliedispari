/*
Palidroma
Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

//1)Chiedere all'utente di inserire una parola

const enterAworld = prompt("Inserisci una parola palindroma");

console.log(enterAworld , "Inserire una parola palindroma" , typeof enterAworld);

//2)Creare una funzione per capire se la parola inserità è palindroma

//Se la parola inserità è palindroma vai avanti 

const listPalindromi = [
    "kayak" , 
    "aerea" ,
    "radar" , 
    "esse" , 
    "emme" , 
    "elle" , 
    "ebbe" , 
    "enne" , 
    "osso" ,
    "otto" ,
];

console.log(listPalindromi , "LIsta Parole Palindrome" , typeof listaPalindromi);



// while(){

// }
//Se la parola inserita non è palindroma ricomincia 

