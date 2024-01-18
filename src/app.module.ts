import { Module } from '@nestjs/common';
import { ProdutoModule } from './product/product.module';

@Module({
  imports: [ProdutoModule],
})
export class AppModule {}
