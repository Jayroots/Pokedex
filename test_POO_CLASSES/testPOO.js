const student = {
    name : "Julie", 
    age : 30,
    city : "Berlin",
    languages : ["react", "javascript"],
    estdiplome : true,


    sayHello: function(){
        console.log(`bonjour je m appelle ${this.name} j ai ${this.age} et j habite à ${this.city}
        je maîtrise ${this.languages} ai je mon diplôme : ${this.estdiplome}`)
    }

}

student.sayHello() ;

//affice la fonction de l objet eleve 


const student1 = {
    name : "Maaaaaaaaarc", 
    age : 34,
    city : "Lisbonne",
    languages : "Python",
    estdiplome : true,

    sayHello: function(){
        console.log(`bonjour je m appelle ${this.name} j ai ${this.age} et j habite à ${this.city}
        je maîtrise ${this.languages} ai je mon diplôme : ${this.estdiplome}`)
    }
    
}

student.sayHello() ;
student1.sayHello() ;


//AUTRE FACON D ECRIRE POUR EVITER DE REPETER KES FONCTIONS ---------------LES CLASSES------------------

class Student {
    constructor(name,age, campus, skills, isGraduated) {
        this.name = name
        this.age = age
        this.campus = campus
        this.skills = skills 
        this.isGraduated = isGraduated}

        sayHello (){
            return `Hello I'm ${this.name}and i live in ${this.campus}`
        }
    }


const Julie = new student ("julie", 30, Berlin, ["javascript","react"], true)
const Marc = new student ("Marc", 34, Lisbonne, ["Python"], true)


console.log(julie.sayhello())
console.log(marc.sayhello())


//---------------EXERCIE CLASSES LUCAS -      ETUDIOANT / FORMATEURS    ----------------------------------------------


class Person {

    constructor(name, age, campus, skills){
        this.name = name
        this.age = age
        this.campus = campus
        this.skills = skills
sayHello(){
    return `Hello I'm ${this.name}`

}
    }
}
class student extends Person {
    constructor(name, age, campus, skills, isGraduated){
        super(name, age, campus, skills);
        this.isGraduated = isGraduated
    }
}

class Trainer extends Person {
    constructor(name, age, campus, skills, startingDate){
        super(name, age, campus, skills);
        this.startingDate = startingDate
    }
}


const person = new Person ("Lucas", 21, "Nantes", ["Javascript"])
const student = new student ("Charlotte", 25,"Bordeaux" )

console.log(student.sayHello())