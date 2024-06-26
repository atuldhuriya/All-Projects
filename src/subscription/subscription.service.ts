import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
const stripe = require('stripe')('sk_test_51POZ75EZ0bb7Mhos2V8VBLhOorobSpxrqrJP1kLwlSnY0a1YbTWcRno4c4MZNNLPdwyIC6WTReWC895FdcmcDR1500NUrDcXwL');

@Injectable()
export class SubscriptionService {
 async create(createSubscriptionDto: CreateSubscriptionDto) {
  const subscription = await stripe.subscriptions.create({
    customer: createSubscriptionDto.customer,
    items: [
      {
        price: createSubscriptionDto.price,
      },
    ],
    payment_behavior: 'default_incomplete',
    payment_settings: { save_default_payment_method: 'on_subscription' },
    expand: ['latest_invoice.payment_intent'],
  });
return subscription
  }

  
 async findAll() {
    const subscriptions = await stripe.subscriptions.list();
    return subscriptions
  }

  findOne(id: number) {
    return `This action returns a #${id} subscription`;
  }

  update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
    return `This action updates a #${id} subscription`;
  }

 async remove(id: number) {
    const subscription = await stripe.subscriptions.cancel(
      
    );
  }
}
