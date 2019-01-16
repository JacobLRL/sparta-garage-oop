const brands = ["Audi", "BMW", "Mercedes", "Tesla"];
const audiModels = ["A1", "A2", "A3", "A4", "A5", "A5", "A7", "A8", "R8"];
const bmwModels = ["1 series", "3 series", "5 series"];
const mercModels = ["A class", "B class", "C class", "E class", "S class"];
const teslaModels = ["Model 3", "Model S", "Model X"];
const allModels = [audiModels, bmwModels, mercModels, teslaModels];
const carColors = ["Black", "White", "Silver", "Blue", "Red"];
const carYears = [2016, 2017, 2018, 2019];


function Car(make, model, color, year) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
}

function randomCarModel(array) {
    let rand = Math.round(Math.random() * (array.length-1));
    let model;
    for (let i = 0; i < array.length; i++) {
        if (rand === i) {
            model = array[i];
            break;
        }
    }
    return model;
}

function randomCarColor() {
    let rand = Math.round(Math.random() * 4);
    return carColors[rand];
}

function randomYear() {
    let rand = Math.round(Math.random() * 3);
    return carYears[rand];
}

function createCars(amount) {
    let carArray = [];
    for (let i = 0; i < amount; i++) {
        let rand = Math.round(Math.random() * 3);
        let brand;
        let model;
        brand = brands[rand];
        model = randomCarModel(allModels[rand]);
        carArray.push(new Car(brand, model, randomCarColor(), randomYear()));
    }
    return carArray;
}

class Garage {
    constructor(country, city, capacity) {
        this.country = country;
        this.city = city;
        this.capacity = capacity;
        this.cars = createCars(capacity - 1);
    }

    buildCar(make, model, color) {
        const newCar = new Car(make, model, color, 2019);
        this.cars.push(newCar);
    }
}

let country;
let city;
let capacity;

alert("Hello there");
country = prompt("I seem to have just woken up and forgotten where I am.\n What country are we in?");
city = prompt("And what city are we in?");
alert(`Welcome to my garage in ${city}, ${country}`);
capacity = prompt("How many cars do you think there are in my garage?");
alert(`Great guess! There are infact ${capacity - 1} in my garage with space to build one more`);

const myGarage = new Garage(country, city, capacity);

console.log(myGarage);

let yesNo = prompt("Would you like to build a new car? 'yes' or 'no'");
if (yesNo === "yes") {
    let make = prompt("what make would you like?");
    let model = prompt("what model would you like?");
    let color  = prompt("what colour would you like?")
    myGarage.buildCar(make, model, color);
}

console.log(myGarage);