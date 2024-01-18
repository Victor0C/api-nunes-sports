import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: Repository<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    if(await this.findOne(createProductDto.code)){
      throw new BadRequestException(`Product ${createProductDto.code} already exists`)
    } 
    return await this.productRepository.save(createProductDto);
  }

  async findAll() {
    return await this.productRepository.find();
  }

  async findOne(code: string) {
    return await this.productRepository.findOne({ where: { code } });
  }

  async update(code: string, updateProdutoDto: UpdateProductDto) {
  if(Object.keys(updateProdutoDto).length === 0) throw new BadRequestException(`provide valid data`)
  
    if(await this.findOne(code)) return await this.productRepository.update({code: code}, updateProdutoDto);
    
    throw new BadRequestException(`Product ${code} not found`)
  }

  async remove(code: string) {
    if(await this.findOne(code)) return await this.productRepository.delete({code: code})
  
    throw new BadRequestException(`Product ${code} not found`)
  }
}
