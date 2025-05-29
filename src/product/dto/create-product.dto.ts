import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'The name of the product',
    example: 'Wireless Mouse',
  })
  name: string;

  @ApiProperty({
    description: 'The price of the product',
    example: 29.99,
  })
  price: number;

  @ApiProperty({
    description: 'A brief description of the product',
    example: 'A high-quality wireless mouse with ergonomic design.',
  })
  description: string;

  @ApiProperty({
    description: 'Indicates if the product is available for purchase',
    example: true,
    required: false,
    default: true,
  })
  available?: boolean;
}
