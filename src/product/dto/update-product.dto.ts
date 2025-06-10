import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Wireless Mouse',
  })
  @IsNotEmpty({ message: 'Product name is required' })
  name: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 29.99,
  })
  @IsNotEmpty({ message: 'Product price is required' })
  @IsNumber({}, { message: 'Product price must be a number' })
  price: number;

  @ApiProperty({
    description: 'A brief description of the product',
    example: 'A high-quality wireless mouse with ergonomic design.',
  })
  @IsNotEmpty({ message: 'Product description is required' })
  description: string;

  @ApiProperty({
    description: 'Indicates if the product is available for purchase',
    example: true,
    required: false,
    default: true,
  })
  @IsNotEmpty({ message: 'Availability status is required' })
  available: boolean;

  updatedAt?: Date;
}
