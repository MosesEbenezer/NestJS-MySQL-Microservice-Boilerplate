import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { MerchantAdminModule } from './merchant-admin/merchant-admin.module';
import { PaymentModule } from './payment/payment.module';
import typeORMConfig from '../config/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AdminModule,
    MerchantAdminModule,
    PaymentModule,
    TypeOrmModule.forRoot(typeORMConfig()),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
