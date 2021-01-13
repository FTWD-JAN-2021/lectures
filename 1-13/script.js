
//Variables
//Let you can mutate, but const you cannot. 
let message = `welcome to javascript!!!`;
message = `JS`


//Data Types
//console.log(message, typeof message)

//console.log(-5.444, typeof 5)

let arr = ['Zebra', 23, message]


//{ key: value }
let obj = { animal: 'porcupine', name: 'spikey' }
// console.log(obj, typeof obj)

//dot notation
obj.age = 12

//bracket notation
obj['hometown'] = 'nebraska'
//Using variable as a key
obj[message] = 'Hurray!!'


delete obj[message]


arr.unshift('Adds item to beginning') //Adds to beginning
arr.push('Adds item to the end', 'Whale', obj) //Adds to end 

arr.shift() //Remove from beginning
arr.pop() //Remove from end


// console.log(arr.length)

// console.log(arr[arr.length - 1])

// console.log(arr[5 - 1])

// console.log(arr.pop())

arr[1] = 'Giraffe'

arr[2] = 'Elephant'

arr[3] = 'Mongoose'

arr[5] = 'Tiger'


let lastAnimal = arr[arr.length - 1]
//Tiger

let firstAnimal = arr[0]
//Zebra

//Tiger = Zebra
arr[arr.length - 1] = firstAnimal

//Zebra = Tiger
arr[0] = lastAnimal

// console.log(arr)


//Where, How Many to Replace, Replace with
arr.splice(2, 0, 'Mouse')
// arr.splice(4, 1)




//Works because of hoisting
function sayName(name, place) { //Argument or a Parameter
    console.log(`Hello my name ${name}, I'm from ${place}`)
}


let sayMyName = (name, place) => {
    console.log(`Hello my name ${name}, I'm from ${place}`)
}


// sayName('Conan', 'Maryland')

// sayMyName("Greg", "Pennsylvania")




//Loops
for (let i = 0; i < 100; i += 1) {

    if (i === 17) {
        console.log(i)
        sayName('Jonathon', 'Florida')
    }

    if (i === 7) {
        console.log(i)
        sayName('Ratsko', 'Florida')
    }

    if (i === 69) {
        console.log(i)
        sayName('Victor', 'South Africa')
    }

}


// console.log("Break I don't need a semicolon")
// console.log(`Space sometimes matter`)



