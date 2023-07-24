// console.log("hellooooo, Node!!!");

// var dog = {
//     name: "Lassie",
//     sound: "woof!",
//     makesound: () => console.log(this.sound),
//     readTag: () => console.log("The dog's tag reads: " + this.name + ".")
// };



// var dog = {
//     name: "Lassie",
//     sound: "woof!",
//     makesound: function () {
//         console.log(this.sound)
//         setTimeout(() => console.log(this), 2000)
//     },
//     readTag: function () {
//         console.log("The dog's tag reads: " + this.name + ".")
//     }
// };

// var dog = {
//     name: "Lassie",
//     sound: "woof!",
//     makesound() {
//         console.log(this.sound)
//         setTimeout(() => console.log(this), 2000)
//     },
//     readTag() {
//         console.log("The dog's tag reads: " + this.name + ".")
//     }
// };

// dog.makesound();

// dog.readTag();

const moviePatrons = [
    {name: "Tom", age: 16},
    {name: "Alice", age: 31},
    {name: "Aghata", age: 2},
    {name: "Pablo", age: 63},
    {name: "Simon", age: 58},
    {name: "Edwards", age: 42},
    {name: "John", age: 17}
];

moviePatrons.forEach(patron => console.log("Thank you for your help " + patron.name));