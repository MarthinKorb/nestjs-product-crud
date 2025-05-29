import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSource } from './data-source';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => dataSource.options,
    }),
    ProductModule,
  ],
})
export class AppModule {}
