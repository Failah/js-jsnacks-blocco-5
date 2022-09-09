console.log('JS OK!');

/* SNACK 1*/
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */



/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


// SNACK 1

const teams = [
    {
        name: 'Milan',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        name: 'Milan',
        'punti fatti': 0,
        'falli subiti': 0
    },
    {
        name: 'Milan',
        'punti fatti': 0,
        'falli subiti': 0
    }
];

teams.forEach(element => {
    element['punti fatti'] = random();
    element['falli subiti'] = random();
});

function random() {
    return Math.floor(Math.random() * 10) + 1;
}

console.log(teams);


/* SNACK 2*/
/*
 * Si scriva una funzione che accetti tre argomenti, 
 * un array e due numeri (a più piccolo di b). 
 * La funzione ritornerà un nuovo array con i valori 
 * che hanno la posizione compresa tra i due numeri.
 */

// METODO VALERIO
const a = 5;

const b = 16;

let array = [];

array = GenerateNumberInterval(array, a, b);

console.log(array);

function GenerateNumberInterval(numbers, a, b) {
    let range = b - a - 1;

    let i = 0;

    numbers = [];

    for (i; i <= range; i++) {
        numbers.push(a + i);
    }

    return numbers;
}


// METODO PIETRO
/*
let a = 10;

let b = 30;

const myArray = [];

for (let index = 0; index < 100; index += 1) {
    myArray.push(index);
}

getGenerateInterval(myArray, a, b);
console.log(myArray);

function getGenerateInterval(myArray, a, b) {
    const second = [];
    for (let index = 0; index < myArray.length; index++) {
        if (myArray[index] > a && myArray[index] < b) {
            second.push(myArray[index]);
        }
    }
    console.log('L\'intervallo di numeri è: ', second);
}
*/


/* SNACK 3*/
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const minore15 = [];
const maggiore15 = [];

for (let index = 0; index < 10; index++) {
    const zucchina = {};
    zucchina.misura = Math.floor(Math.random() * 20) + 1;

    zucchina.misura < 15 ? minore15.push(zucchina) : maggiore15.push(zucchina);
}

console.log('Zucchine leggere: ', minore15);
console.log('Zucchine pesanti: ', maggiore15);
