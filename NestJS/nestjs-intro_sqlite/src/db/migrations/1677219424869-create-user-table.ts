import { TableName } from './../TableName';
import { MigrationInterface, QueryRunner, Table, TableOptions } from "typeorm"

export class createUserTable1677219424869 implements MigrationInterface {

    public userTable: Table = new Table({
        name: TableName.User,
        columns: [
            {
                name: "id",
                type: "integer",
                isGenerated: true,
                generationStrategy: 'increment',
                isPrimary: true,
            },
            {
                name: "email",
                type: "string",
                isNullable: false,
                isUnique: true,
            },
            {
                name: "full_name",
                type: 'string',
                isNullable: true,
                isUnique: false
            }
        ]
    })

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(this.userTable)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.userTable)
    }

}
