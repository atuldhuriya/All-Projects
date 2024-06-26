import { ApiProperty } from "@nestjs/swagger";

export class CancelSubscriptionDto {
    @ApiProperty({ type: String, required: true, example: "sub_1MlPf9LkdIwHu7ixB6VIYRyX" })
    cancel: string;
}
