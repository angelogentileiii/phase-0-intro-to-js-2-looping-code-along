// Code your solutions in this file

/*

function writeCards(names, event){
    const thankYou = [];
    for (let x = 0; x < names.length; x++){
        thankYou.push(`Thank you, ${names[x]}, for the wonderful ${event} gift!`);
    }
    return thankYou;  
};

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));

function countDown(number){
    while (number > -1) {
        console.log(number--);
    }
}

countDown(10);

// spacer

for (let age = 30; age < 40; age ++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
}

const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/

function writeCards(name, event){
    const cardArray = [];
    for (let x = 0; x < name.length; x++) {
        cardArray.push(`Thank you, ${name[x]}, for the wonderful ${event} gift!`)
    }
    return cardArray;
}

console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise'));

function countDown (number) {
    while (number >= 0) {
        console.log(number--)
    }
}

countDown(10);

