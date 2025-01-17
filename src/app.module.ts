import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { PricesModule } from './prices/prices.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [CustomersModule, PricesModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
