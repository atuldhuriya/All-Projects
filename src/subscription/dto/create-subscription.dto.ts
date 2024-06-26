import { ApiProperty } from "@nestjs/swagger";

export class CreateSubscriptionDto {
  @ApiProperty({ type: String, required: true, example: "cus_QFStYKmPP7ZcXG" })
  customer: string;

  @ApiProperty({ type: String, required: true, example: "price_1POxz9EZ0bb7MhosjwuRqQaE" })
  price: string;
}

