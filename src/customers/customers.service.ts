import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
const stripe = require('stripe')('sk_test_51POZ75EZ0bb7Mhos2V8VBLhOorobSpxrqrJP1kLwlSnY0a1YbTWcRno4c4MZNNLPdwyIC6WTReWC895FdcmcDR1500NUrDcXwL');


@Injectable()
export class CustomersService {
  async create(createCustomerDto: CreateCustomerDto) {
    const customer = await stripe.customers.create({
      name: createCustomerDto.name,
      email: createCustomerDto.email,
    });
    return customer
  }

   async findAll() {
    const customers = await stripe.customers.list();
    return customers
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
