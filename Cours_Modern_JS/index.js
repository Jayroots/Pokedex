//FONCTIONS FLECHEES ------------------------------------


const double = (a)=> a * 2 ; // COMME IL Y A QU UN PARAMETRE ON PEUT ECRIRE 
// const double = a => a * 2
//------------------------------------------
const logParamsAndReturnAddition = (a,b) => console.log(a+b) ;
//---------------------------------------
const roundMap = numbers => {

    const arrondi = (number) => {
        return Math.round(number)
    }
    return numbers.map(arrondi)
}   
// peut etre reduite comme ca :    cons roundMap = numbers => numbers.map(number=>Math.round(number))
//un seul parametre donc on enleve les parentheses au parametre
// la fonction .MAP parcoure toutes les valeurs et cree un nouveau tableau avec les elements modifiés 
// elle attend une fonction a l interieur 
//--------------------------------
const getImageMarkup = (src, alt, width=400, height=300)=>{
return `<img src="${src}"alt="${alt}" width="${width}height="${heigth}">`}
// peut etre reduit en une ligne sans accolade car un seul return :
//const getImageMarkup = (src, alt, 400, 300)=> `<img src="${src}"alt="${alt}" width="${width}height="${heigth}">`

//POUR AFFICHER MES RESULTATS -----------------------------------------

console.log(double(6))
console.log(logParamsAndReturnAddition(5,6))
console.log(roundMap([4, 5.76, 6.89, 8]))
console.log(getImageMarkup("logo.png", "logo", 500, 600))

const resultat = double(5)   //stocke un resultat 


//   ENONCE --------------------------------------Avec la syntaxe la plus courte, écrivez les fonctions suivantes :
/* 
“double” : prend un nombre en paramètre et retourne le nombre * 2.
“logParamsAndReturnAddition” : prend deux nombres en paramètre, les affiche dans la console et renvoie l'addition de ces nombres.
“roundMap” : une fonction qui prend un tableau de nombres en paramètre et retourne un nouveau tableau avec des valeurs arrondies. 
“getImageMarkup” : une fonction qui prend 4 paramètres :
src
alt 
width (égal à 400 par défaut)
height (égal à 300 par défaut)
          
Et retourner une chaîne de caractères contenant la balise "<img>" avec les attributs    définis en conséquence. */


//CONCATENER DES TABLEAUX  et OBJETS ------ SYNTAXE SPREAD -----CREER UNE COPIE

const fruits = ["fraise", "banane"]
const legumes = ["courgettes", "poireau", "carotte "]
console.log(...fruits)


const objet = {
    a:1,
    b:2
    c:3
    d:5
}

const nouvelObjet = {
    ...objet,
    d:4
}


//DESTRUCTURER -------------------

const user = {
    name:'John Doe',
    description : 'an average guy',
}

const {name, description} = user
// on peut renommer en faisant const {name:prenom, description} = user , le name va devenir prenom


console.log (`${name}${description}`)

//nouvel exercie de destructuration ------

const user = {
    name: 'John Doe',
    address: {
        city: 'L.A',
        country: {
            countryCode: 567,
            countryName: 'U.S.A',
        },
    },
};
const {name, address:{city,country:{countryName}}} = user
// ajoutez une ligne avec des affectations de déstructuration ici pour que ce code fonctionne
console.log(`${name} lives in ${city}, ${countryName}`);


//fonctionne sur un tableau DESTRUCTURATION : rechercher des coordonnéess

const coordonates = [44, 165]

const [longitude, latitude] = coordonates
// au lieu d ecrire : 
// const longitude = coordonates[0]
// const latitude = coordonates [1]
console.log(longitude, latitude)