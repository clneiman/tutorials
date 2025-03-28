const carMakers: string[] = ['ford', 'dodge', 'chevrolet'];
const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['mustang'],
    ['challenger'],
    ['camaro']
];

// Help with inference when extracting values
const newCar = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-12-12');
importantDates.push(new Date());
