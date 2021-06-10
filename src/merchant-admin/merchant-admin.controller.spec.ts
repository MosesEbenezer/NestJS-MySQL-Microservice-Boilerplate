import { Test, TestingModule } from '@nestjs/testing';
import { MerchantAdminController } from './merchant-admin.controller';
import { MerchantAdminService } from './merchant-admin.service';

describe('MerchantAdminController', () => {
  let controller: MerchantAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MerchantAdminController],
      providers: [MerchantAdminService],
    }).compile();

    controller = module.get<MerchantAdminController>(MerchantAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
