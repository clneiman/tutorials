import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1728142016704 implements MigrationInterface {
    name = 'InitialSchema1728142016704'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`report\` (\`id\` int NOT NULL AUTO_INCREMENT, \`approved\` tinyint NOT NULL DEFAULT 0, \`make\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`mileage\` int NOT NULL, \`lng\` int NOT NULL, \`lat\` int NOT NULL, \`price\` int NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`admin\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`report\` ADD CONSTRAINT \`FK_e347c56b008c2057c9887e230aa\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`report\` DROP FOREIGN KEY \`FK_e347c56b008c2057c9887e230aa\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`report\``);
    }

}

// const { MigrationInterface, QueryRunner, Table } = require('typeorm');
 
// module.exports = class initialSchema1625847615203 {
//   name = 'initialSchema1625847615203';
 
//   async up(queryRunner) {
//     await queryRunner.createTable(
//       new Table({
//         name: 'user',
//         columns: [
//           {
//             name: 'id',
//             type: 'integer',
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: 'increment',
//           },
//           {
//             name: 'email',
//             type: 'varchar',
//           },
//           {
//             name: 'password',
//             type: 'varchar',
//           },
//           {
//             name: 'admin',
//             type: 'boolean',
//             default: 'true',
//           },
//         ],
//       }),
//     );
 
//     await queryRunner.createTable(
//       new Table({
//         name: 'report',
//         columns: [
//           {
//             name: 'id',
//             type: 'integer',
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: 'increment',
//           },
//           { name: 'approved', type: 'boolean', default: 'false' },
//           { name: 'price', type: 'float' },
//           { name: 'make', type: 'varchar' },
//           { name: 'model', type: 'varchar' },
//           { name: 'year', type: 'integer' },
//           { name: 'lng', type: 'float' },
//           { name: 'lat', type: 'float' },
//           { name: 'mileage', type: 'integer' },
//           { name: 'userId', type: 'integer' },
//         ],
//       }),
//     );
//   }
 
//   async down(queryRunner) {
//     await queryRunner.query(`DROP TABLE ""report""`);
//     await queryRunner.query(`DROP TABLE ""user""`);
//   }
// };