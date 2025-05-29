import * as dotenv from 'dotenv';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Product } from './product/entities/product.entity';

dotenv.config();

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  schema: process.env.DB_SCHEMA,
  entities: [Product],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  migrationsRun: true,
  migrationsTableName: 'Migrations',
  logging: true,
});
