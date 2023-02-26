import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Entity } from 'typeorm';


@Entity({ name: 'cats' })
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    breed: string;
}