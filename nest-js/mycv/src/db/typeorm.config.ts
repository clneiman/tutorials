import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: this.configService.get<string>('DB_USERNAME'),
        password: this.configService.get<string>('DB_PASSWORD'),
        database: this.configService.get<string>('DB_NAME'),
        migrations: [__dirname + '/migrations/*{.js,.ts}'],
        autoLoadEntities: true,
        synchronize: false,
        migrationsRun: process.env.NODE_ENV === 'test' ? true : false,
        keepConnectionAlive: process.env.NODE_ENV === 'test' ? true : false,
    };
  }
}