import { faker } from "@faker-js/faker";
import { Mappable } from "./Map";

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.company.name();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `
            <div>
                <h2>Company Name: ${this.name}</h2>
                <h3>Catchphrase: ${this.catchPhrase}</h3>
            </div>
        `;
    }
}