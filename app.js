//setInterval and setTimeout most common higher order functions
//setInterval(() => console.log('hi'), 1000)

const pets = [
    { name: 'Luna', age: 6, type: 'cat' },
    { name: 'Luke', age: 6, type: 'cat' },
    { name: 'Leia', age: 6, type: 'cat' },
    { name: 'Daisy', age: 4, type: 'dog' },
    { name: 'Lilly', age: 1, type: 'dog' },
    { name: 'Noodle', age: 0, type: 'cat' },
    { name: 'Nugget', age: 0, type: 'cat' },
    { name: 'Freddy', age: 2, type: 'fish' },
    { name: 'Ethel', age: 2, type: 'fish' }
]

const kids = [
    { name: 'Blake', age: 6 },
    { name: 'Avery', age: 4 },
    { name: 'Riley', age: 1 }
]


//array methods
/*const names = [ ]
for(let i = 0; i <pets.length; i++)
{
    names.push(pets[i].name)
}
console.log(names)*/

// const names = pets.map((pet) => {
//    return pet.name})
// console.log(names)

// const names2 = pets.map(p => p.name)
// console.log(names)

pets.forEach(pet => {console.log(`My pets name is ${pet.name}. They are ${pet.age} years old.`)})

kids.map(x => x.name).forEach(n => console.log(n))


const babyPet = pets.find(pet => pet.age === 0)  //finds the first per that is 0
console.log(babyPet)

const baby = pets.filter(({ age }) => age === 0)
console.log(baby)

//some is a boolean that will return true if one of the things matches
//every is a boolean that will return true if all of the things match

const instructors = [
    "Ryan D Appel",
    "Brian Foote",
    "Joe Wetzel",
]

const slugs = instructors.map(i => i.toLowerCase().replaceAll(' ', '-'))  //replace replaces the first, replaceAll replaces all
console.log(slugs)


//toSorted doesn't change the original array
const sortedByAge= pets.sort((a, b) => {
    // if(a.age === b.age) return 0
    // if(a.age <b.age) return -1
    // return 1

    return a.age <b.age ? -1 : a.age > b.age ? 1 : 0    
})
 console.log(sortedByAge)


 //Reduce- starts with an array- you can get anything out of it

 const totalAge = pets.reduce((x, pet) => {
    return x + pet.age

 }, 0)
 //console.log(totalAge)

 const sentence = "Hi there!"

 const letterCount = sentence.toLowerCase().split('')
 .reduce((countObject, letter) => {
    if(!countObject[letter]) countObject[letter] = 1
    else countObject[letter]++

    return countObject
 }, { }) //start with an empty object

 console.log(letterCount)

 //function composition
 const isBaby = ({age}) => age === 0
 const isNotDog = ({type}) => type !== 'dog'

 const babyPetNotDog = pets.filter(isNotDog).find(isBaby)?.name  // ?. if its null, dont continue on to find the name


 //function currying- returning a function

 const add = (a) => (b) => a + b
 console.log(add(3)(4))

 const add3 = add(3)
 console.log(add3(4))

const logWith =  prefix => message => console.log(prefix, message)

const elog = logWith("Erichs code")
const jlog = logWith("Johns s")

elog("Hello")
jlog("Whats up")



 

