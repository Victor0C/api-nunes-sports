import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({message: 'Enter the name'})
  @IsString()
  readonly name: string;

  @IsNotEmpty({message: 'Enter the product code'})
  @IsString()
  readonly code: string;

  @IsNotEmpty({message: 'Enter the product description'})
  @IsString()
  readonly desc: string;

  @IsNotEmpty({message: 'Enter the price of the product'})
  @IsNumber()
  readonly price: number;
}
