import { createUserTable1677219424869 } from './src/db/migrations/1677219424869-create-user-table';
import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserEntity } from "./src/db/entities/user.entity"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./data/dev.db",
    entities: [UserEntity],
    migrations: [createUserTable1677219424869],
    subscribers: ['src/db/subscribers/**/*.ts'],
})
