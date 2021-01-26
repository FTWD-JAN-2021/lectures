let car = {
    name: 'Mustang',
    topSpeed: 150,
    drive: function () {
        return `Vroom Vroom my car is fast it goes ${this.topSpeed} mph`
    }
}


class Car {
    constructor(name, topSpeed) {
        this.name = name
        this.topSpeed = topSpeed
        this.currentSpeed = 0
        this.peopleInCar = []
    }

    getIn(person) {
        if (this.maxPeople > this.peopleInCar.length) {
            this.peopleInCar.push(person)
        } else {
            alert('car is full')
        }
    }

    drive() {
        let int = setInterval(() => {
            this.currentSpeed += 20
            if (this.currentSpeed >= this.topSpeed) {
                clearInterval(int)
            }
            console.log(this.currentSpeed)
        }, 200)
    }

    howFast = () => {
        return `Vroom Vroom my car is fast it goes ${this.topSpeed} mph`
    }
}

let ferrari = new Car('Ferrari', 240)
let camero = new Car('Camero', 190)
let mustang = new Car('Mustang', 180)
let g35 = new Car('Infiniti', 159)
let bmDoubleFoot = new Car('Beamer', 10000)


class SportsCar extends Car {
    constructor(name, topSpeed, color) {
        super(name, topSpeed)
        this.color = color
        this.maxPeople = 2

    }
    noz() {
        console.log("VROOOOOOOOOOOOOMMMM!!")
    }

}

let porsche = new SportsCar('Porsha', 400, 'pink')

// porsche.getIn("Conan")
// porsche.getIn("Xavier")
// porsche.getIn("Ish")

class Sedan extends Car {
    constructor(name, topSpeed, doors) {
        super(name, topSpeed)
        this.doors = doors
        this.maxPeople = 6
    }

    breakDown() {
        console.log("OOOOOPP..")
    }



}


let toyota = new Sedan('Camry', 95, 4)


































/**HOISTING */
// oldShool()

// //Older style
// function oldShool() {
//     console.log('old school still good')
// }

// //ES6 
// const newSkool = () => {
//     console.log('new school')
// }



// newSkool()
