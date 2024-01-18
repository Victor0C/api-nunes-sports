import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll() {
    return await this.productService.findAll();
  }

  @Get(':code')
  async findOne(@Param('code') code: string) {
    return await this.productService.findOne(code);
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productService.create(createProductDto);
  }

  @Put(':code')
  async update(
    @Param('code') code: string,
    @Body() updateProdutoDto: UpdateProductDto,
  ) {
    return await this.productService.update(code, updateProdutoDto);
  }

  @Delete(':code')
  async remove(@Param('code') code: string) {
    return await this.productService.remove(code);
  }
}
