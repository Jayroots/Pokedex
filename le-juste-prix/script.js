function justePrix () {
    const name = prompt("Enter your name");
const rightPrice = Math.floor(Math.random() * 100) + 1;
let number = prompt("Enter a number");
if(number>rightPrice){console.log("c'est moins");}
else if(number<rightPrice){console.log("c'est plus");}
else if(number === rightPrice){console.log("name");}
}

