import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceDto } from './create-price.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePriceDto extends PartialType(CreatePriceDto) {
    // @ApiProperty({ type:Number, required:true,default:"599"})
    // NewPrice : number

    // @ApiProperty({ type:String, required:true, default:"prod_QFXMu1ic9wRQpb" })
    // productId : string

    // @ApiProperty({ type:Number, required:true,default:"usd"})
    // currency : string

   
}
