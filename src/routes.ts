import { Routes } from 'nest-router';
import { AdminModule } from './admin/admin.module';
import { MerchantAdminModule } from './merchant-admin/merchant-admin.module';
import { PaymentModule } from './payment/payment.module';

export const routes: Routes = [
  {
    path: '/admin',
    module: AdminModule,
  },
  {
    path: '/merchant',
    module: MerchantAdminModule,
  },
  {
    path: '/payment',
    module: PaymentModule,
  },
];
