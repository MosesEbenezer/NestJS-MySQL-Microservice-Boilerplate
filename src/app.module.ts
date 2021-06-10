import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { MerchantAdminModule } from './merchant-admin/merchant-admin.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [AdminModule, MerchantAdminModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
