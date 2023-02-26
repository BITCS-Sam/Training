
import { config } from 'dotenv';
import { TypeOrmModuleOptions } from "@nestjs/typeorm/dist/interfaces/typeorm-options.interface"
import { ConnectionOptionsEnvReader } from "typeorm/connection/options-reader/ConnectionOptionsEnvReader"
import path from 'path';

export const loadEnvironmentVariables = async () => {
    config();
}

export const loadTypeORMConnectionFromEnv = async () => {
    const envReader = new ConnectionOptionsEnvReader()

    const envConfig = await envReader.read();
    const envConfigObj = envConfig[0];
    const options: TypeOrmModuleOptions = {
        ...envConfigObj,
        entities: [
            path.join(__dirname, "../../", `${process.env.TYPEORM_ENTITIES}`)
        ],
        migrations: []
    }
    return options;


    // const connectionOption: TypeOrmModuleOptions = {
    //     ...envReader.read(),
    //     entities: [`${__dirname}/${process.env.TYPEORM_ENTITIES}`],
    //     migrations: []
    // }
    // console.log(connectionOption)
    // return connectionOption
}