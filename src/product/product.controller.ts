import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new product',
    description: 'Creates a new product in the inventory.',
  })
  @ApiBody({
    type: CreateProductDto,
    description: 'The product details to create.',
    required: true,
  })
  @ApiResponse({
    status: 201,
    description: 'The product was successfully created.',
    type: CreateProductDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request. The provided data is invalid.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. An unexpected error occurred.',
  })
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    summary: 'List all products',
    description: 'Retrieves a list of all products in the inventory.',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of products was successfully retrieved.',
    type: [CreateProductDto],
  })
  @ApiResponse({
    status: 404,
    description: 'No products found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. An unexpected error occurred.',
  })
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a single product by ID',
    description: 'Retrieves a product by its unique identifier.',
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the product to retrieve.',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The product was successfully retrieved.',
    type: CreateProductDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. An unexpected error occurred.',
  })
  findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a product',
    description: 'Updates an existing product by ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the product to update.',
    type: Number,
  })
  @ApiBody({
    type: UpdateProductDto,
    description: 'The updated product details.',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description: 'The product was successfully updated.',
    type: UpdateProductDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request. The provided data is invalid.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. An unexpected error occurred.',
  })
  update(@Param('id') id: number, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a product',
    description: 'Removes a product from the inventory by ID.',
  })
  @ApiParam({
    name: 'id',
    description: 'The unique identifier of the product to delete.',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The product was successfully deleted.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request. The provided ID is invalid.',
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found.',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error. An unexpected error occurred.',
  })
  remove(@Param('id') id: number) {
    console.log(`Removing product with ID: ${id}`);
    return this.productService.remove(id);
  }
}
