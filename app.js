var myName = "Michael-Dean Williamson";
var USA = 50;
var result = 5 + 4; //simple math//
var msg = "Hello World";
function sayHello(msg) {
    console.log(msg);
}
sayHello(msg);
function checkAge(name, age) {
    if (age < 21) {
        console.log("sorry " + name + ", you aren't old enough to view this page");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);
var veggies = ["carrot", "bell pepper", "broccoli"];
for (var v = 0; v < veggies.length; v++) {
    console.log(veggies[v]);
}
var pet = {
    name: "Bones",
    breed: "German Shepard Mutt"
};
console.log(pet);
var names = [{ name: "Fred", age: 19 }, { name: "Jude", age: 10 }, { name: "Jill", age: 27 }, { name: "Ben", age: 20 }, { name: "Jim", age: 30 }];
for (var i = 0; i < names.length; i++) {
    checkAge(names[i].name, names[i].age);
}
var string = "hello world";
function getLength(string) {
    if (string.length % 2 == 0) {
        console.log("The world is nice and even!");
    }
    else if (string.length % 2 == 1) {
        console.log("The world is an odd place!");
    }
}
getLength(string);
