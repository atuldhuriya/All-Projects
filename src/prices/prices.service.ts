import { Injectable } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
const stripe = require('stripe')('sk_test_51POZ75EZ0bb7Mhos2V8VBLhOorobSpxrqrJP1kLwlSnY0a1YbTWcRno4c4MZNNLPdwyIC6WTReWC895FdcmcDR1500NUrDcXwL');



@Injectable()
export class PricesService {
  async create(createPriceDto: CreatePriceDto) {
    const price = await stripe.prices.create({
      currency: 'usd',
      unit_amount: 1000,
      recurring: {
        interval: 'month',
      },
      product_data: {
        name: 'Gold Plan',
      },
    });
    return price
  }

 async findAll() {
    const prices = await stripe.prices.list();
     return prices
  }

  findOne(id: number) {
    return `This action returns a #${id} price`;
  }

  update(id: number, updatePriceDto: UpdatePriceDto) {
    return `This action updates a #${id} price`;
  }

  remove(id: number) {
    return `This action removes a #${id} price`;
  }
}
