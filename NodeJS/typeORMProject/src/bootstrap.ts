import { User } from './entity/User';
import { AppDataSource } from "./data-source";


export const Bootstrap = async () => {
    AppDataSource.getRepository(User).find().then(users => {
        console.log("users", users)
    }).catch((err) => {
        console.log("err", err)
    })
}
