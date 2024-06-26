import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('payment-method')
  createPaymentMethod(@Body() paymentDetails: any) {
    return this.appService.createPaymentIntent(paymentDetails);
  }
}
