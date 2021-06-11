import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from './admin/admin.module';
import { MerchantAdminModule } from './merchant-admin/merchant-admin.module';
import { PaymentModule } from './payment/payment.module';
import * as connectionOptions from '../ormconfig';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from 'nest-router';
import { routes } from './routes';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    RouterModule.forRoutes(routes),
    AdminModule,
    MerchantAdminModule,
    PaymentModule,
    TypeOrmModule.forRoot(connectionOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
