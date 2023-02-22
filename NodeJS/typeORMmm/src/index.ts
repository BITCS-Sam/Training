import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    console.log("Initialized , Connected")
}).catch((err) => {
    console.log("Error: ", err)
})