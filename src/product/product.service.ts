import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    Object.assign(createProductDto, {
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return await this.productRepository.save(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return this.productRepository.find({ order: { description: 'ASC' } });
  }

  async findOne(id: number): Promise<Product | null> {
    return this.productRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const existingProduct = await this.productRepository.findOneBy({ id });
    if (!existingProduct) {
      throw new NotFoundException(`Produto não encontrado!`);
    }
    Object.assign(existingProduct, {
      ...updateProductDto,
      updatedAt: new Date(),
    });
    return await this.productRepository.save(existingProduct);
  }

  async remove(id: number): Promise<{ message: string }> {
    const existingProduct = await this.productRepository.findOneBy({ id });
    if (!existingProduct) {
      throw new NotFoundException(`Product not found`);
    }
    await this.productRepository.delete(id);
    return { message: 'Produto deletado com sucesso!' };
  }
}
