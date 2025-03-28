import { DataSource, DataSourceOptions } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'mysql',
  database: 'nestjs-mycv-dev',
  username: 'root',
  password: 'admin',
  entities: ['**/*.entity{.js,.ts}'],
  migrations: [__dirname + '/migrations/*{.js,.ts}'],
} as DataSourceOptions);