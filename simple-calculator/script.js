

function calculatrice(){
    let firstValue = parseInt(prompt("Enter a number"));
    let operator =  prompt("operation");
    let secondValue = parseInt(prompt("Enter a second number"));
    
    
    switch(operator){
        case"+":console.log(firstValue + secondValue);
        break;
        case"-":console.log(firstValue - secondValue);
        break;
        case"*":console.log(firstValue * secondValue);
        break;
        case"/":console.log(firstValue / secondValue);
        break;
        case"null":console.log("Operateur non valide");
        break;
    }

}