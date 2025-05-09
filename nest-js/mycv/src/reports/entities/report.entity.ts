import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

import { User } from "../../users/entities/user.entity";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ default: false })
    approved: boolean;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    mileage: number;

    @Column()
    lng: number;

    @Column()
    lat: number;

    @Column()
    price: number;

    @ManyToOne(() => User, (user) => user.reports)
    user: User;
}