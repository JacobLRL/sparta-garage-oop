function Car(make, model, color, year) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.year = year;
}

class Garage {
    constructor(country, city, capacity, currentAmount) {
        this.country = country;
        this.city = city;
        this.capacity = capacity;
        this.currentAmount = currentAmount;
    }

    buildCar(make, model, color) {
        const newCar = new Car(make, model, color, 2019);
    }
}