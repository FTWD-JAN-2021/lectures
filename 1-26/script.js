//Class is like an Object but it has additional powers 
class Animal {

    //Constructor is what is different about each class, and what properties it's initially given
    constructor(name, selector, weight) {

        //This.name maybe different depending on what you put down in here 
        this.name = name
        this.selector = selector
        this.weight = weight
        this.alive = true
    }
    eat() {
        console.log(this)
        console.log(`nom nom... ${this.name} is eating... nom`)
        this.weight += 50
        console.log(`now i weight ${this.weight}`)
    }
    sleep = () => {
        console.log('zzzzzzzz', this)
    }

}

class Chameleon extends Animal {
    constructor(name, selector, weight) {
        super(name, selector, weight)
        this.pastColors = []
    }
    //All these are just methods that every instance will have
    addColor = (color) => {
        this.eat()
        super.eat()
        this.pastColors.push(color)
    }
    morph = () => {
        let color = this.pastColors[Math.floor(Math.random() * this.pastColors.length)]
        document.querySelector(this.selector).style.backgroundColor = color
    }

}



// class Chameleon extends Animal {

//     // super(name, selector, weight)
//     pastColors = []
//     //All these are just methods that every instance will have
//     addColor = (color) => {

//         this.pastColors.push(color)
//     }


// }