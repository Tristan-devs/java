//objects are a collection of datapoints and behaviours 
// we already encountered a type of object: the array

const Car ={
    topSpeed: 120,
    mileage: 0,
    fourWheelDrive: true
}

// logging the topspeed property of the car object
console.log(Car.topSpeed)

const Me={
    name:"Tristan",
    age: 21
}

const You={
    name: "Elliot",
    age: 28
}

const John={
    name: "John",
    age: 32
}

const craig={
    name: "Craig",
    age: 25
}

//finding oldest person in the group

const people = [Me, You, John, craig]

let oldest = {age : 0};

for(const person of people){ // person is the individual currently being checked, people is the array
    if (person.age > oldest.age) // checking if current person is older than the assigned oldest
    (oldest = person) // if condition is met, reassigns the current person as 'oldest'
}

console.log(oldest);

const car1={
    topspeed: 210,
    health: 180,
    Driver: Me,
}
const car2={
    topspeed: 180,
    Driver: You,
    health: 240,
}
const car3={
    topspeed: 150,
    Driver: John,
    health: 310,
}
const car4 ={
    topspeed: 250,
    health: 150,
    Driver: craig,
}

const Cars = [car1, car2, car3, car4]

let fastest = {topspeed : 0};

for(const Car of Cars){
    if (Car.topspeed > fastest.topspeed)
    (fastest = Car)
}

console.log(fastest);
