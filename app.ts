let myName: string = "Michael-Dean Williamson"

const USA:number = 50

let result:number = 5 + 4  //simple math//

let msg:string = "Hello World"

function sayHello(msg:string):void {
    console.log(msg)
}

sayHello(msg)

function checkAge(name:string, age:number):void {

    if (age < 21) {
        console.log("sorry " + name + ", you aren't old enough to view this page")
    }
}

checkAge("Charles",21)
checkAge("Abby",27)
checkAge("James",18)
checkAge("John",17)

let veggies:string[] = ["carrot", "bell pepper", "broccoli"]

for (let v:number = 0; v < veggies.length; v++) {
    console.log(veggies[v])

}

let pet:{ name:string; breed:string } = {
    name: "Bones",
    breed: "German Shepard Mutt"
}
console.log(pet)

interface Person {
    name:string;
    age:number;
}

let names:Person[] = [{name: "Fred", age: 19},{name: "Jude", age:10},{name:"Jill", age:27},{name:"Ben", age:20},{name:"Jim", age:30}]

for (let i:number = 0; i < names.length; i++) {
   checkAge(names[i].name, names[i].age);
}


let string:string = "hello world"

function getLength (string:string):void {
    if (string.length % 2==0) {
        console.log("The world is nice and even!")
    }
    else if (string.length % 2==1) {
        console.log("The world is an odd place!")
    }
}

getLength(string)
