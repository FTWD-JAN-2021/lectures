

let arr = [
    'sunflower',
    'dead',
    'tulip',
    'weed',
    'rose',
    'orchid'
]


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (item of arr) {
//     console.log(item)
// }


// arr.forEach(function (item) {
//     console.log(item)
// })


// let newArr = arr.map(item => {
//     return item.toUpperCase()
// })


// let filteredArr = arr.filter((item, i) => {
//     //let newItem = item.replace("e", 'HIIIII')
//     //console.log(newItem)
//     //return newItem;
//     return item.includes('ros')
// })


// let arrNum = [1, 2, 3, 4]

// let val = arr.reduce((acc, item) => {
//     item += ' ' + acc
//     return item
// }, ' ')


let num = [34, 2, 7, 9]

num.sort((a, b) => {
    return b - a
})

// console.log(num)


arr.sort((a, b) => {
    return a.localeCompare(b)
})

// console.log(arr)


let arrOfObjects = [
    {
        name: 'Stelian',
        food: 'fries',
        calories: 200
    },
    {
        name: 'Victor',
        food: 'Chongas Chongas',
        calories: 300
    },

    {
        name: 'Xavier',
        food: 'Chimmy Chongas',
        calories: 20000,
    },

    {
        name: 'Mike',
        food: 'pizza',
        calories: 300
    },

]



let filteredObj = arrOfObjects.filter((obj) => {
    //console.log(obj)
    return obj.food.includes('z') || obj.name.includes('X')
})



arrOfObjects.sort((a, b) => {
    if (a.calories > b.calories) {
        return 1
    }
    if (a.calories < b.calories) {
        return -1
    }
    return 0
})






// arrOfObjects.sort((a, b) => {
//     if ((a.food).includes('Chongas')) {
//         return -1
//     } else {
//         return 0
//     }
// })

