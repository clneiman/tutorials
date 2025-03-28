class Automobile {

    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Automobile('blue');
console.log(vehicle.color);

class Car extends Automobile {
    constructor(public wheels: number, color: string) {
        super(color);
    }

    private drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
