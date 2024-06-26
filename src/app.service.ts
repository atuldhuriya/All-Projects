import { Injectable } from '@nestjs/common';
const stripe = require('stripe')('sk_test_51POZ75EZ0bb7Mhos2V8VBLhOorobSpxrqrJP1kLwlSnY0a1YbTWcRno4c4MZNNLPdwyIC6WTReWC895FdcmcDR1500NUrDcXwL');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async createPaymentIntent(amount: number): Promise<any> {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: 4000,
        currency: 'usd',
        automatic_payment_methods: {
          enabled: true,
        },
      });
      return paymentIntent;
    } catch (error) {
      throw new Error(`Failed to create payment intent: ${error.message}`);
    }
  }
}

