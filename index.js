// Code your solutions in this file

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