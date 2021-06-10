import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { MerchantAdminModule } from './merchant-admin/merchant-admin.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    AdminModule,
    MerchantAdminModule,
    PaymentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
