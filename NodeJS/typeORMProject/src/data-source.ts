import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "57489Raj",
    database: "Users",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: ['migration/**/*.ts'],
    subscribers: ['subscribers/**/*.ts'],
})
