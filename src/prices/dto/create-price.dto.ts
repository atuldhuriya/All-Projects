import { ApiProperty } from "@nestjs/swagger";

export class CreatePriceDto {
    @ApiProperty({ type:Number, required:true,})
    price : number

    @ApiProperty({ type:String, required:true, default:"month" })
    interval : string
}
