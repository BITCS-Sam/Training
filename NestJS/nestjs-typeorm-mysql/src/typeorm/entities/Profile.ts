import { PrimaryGeneratedColumn, Column } from 'typeorm';
import { Entity } from 'typeorm';

@Entity({ name: "user_profile" })
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    age: string

    @Column()
    dob: string
}