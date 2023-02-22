import { Bootstrap } from './bootstrap';
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

// AppDataSource.initialize().then(async () => {
//     console.log("connection established")

//     const user = new User()
//     user.firstName = "Raj"
//     user.lastName = "Kumar"
//     user.age = 25

//     await AppDataSource.manager.save(user)

//     console.log("user saved", user.id)

// }).catch(error => console.log(error))

Bootstrap().catch(err => console.log(err))