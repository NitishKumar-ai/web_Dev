const garage = [
    {
        brand: "proche",
        model: 911,
        year: 2023,
        isRunnign: true,
        status: "parked",
        // this is a Method : Afunction stored as preopety
        describe() {
            return `${this.year} ${this.brand} ${this.model}`
        }
    },
    {
        brand: "Tesla",
        model: "model s",
        year: 2024,
        horsePower: 670,
        isRunnign: false,
        status: "charging",
        describe() {
            return `${this.year} ${this.brand} ${this.model}`
        }
    }

];

// Intrection Function
 function startEngine(carIndex) {
    const car = garage[carIndex];
    if (!car) return;
    // we can add properties to objets dynamaically
    car.colour = newColour;
    console.log(`\n--- Action: Paint Shop ---`);
    console.log(`The ${car.model} is now ${newColour}`);

    
 }

 function showgarageStatus() {
    console.log(`\n--- Current Srage Stuts ---`);
    garage.forEach((car, index) =>{
        const engineStatus = car.isRunnign ? 'on': 'off';
        console.log(`${index}: ${car.describe()} | Engine: ${engineStatus} | Status: ${car.status}`);
        
    })
 }

 console.log("Welcome to your Digigtal Garage!");
 
 showgarageStatus(); // look at the initaisl state
 startEngine(0); // start the porche
 paintCar(2, "midnight Blue");
 showgarageStatus();

