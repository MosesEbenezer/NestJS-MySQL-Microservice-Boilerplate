import { Test, TestingModule } from '@nestjs/testing';
import { MerchantAdminService } from './merchant-admin.service';

describe('MerchantAdminService', () => {
  let service: MerchantAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MerchantAdminService],
    }).compile();

    service = module.get<MerchantAdminService>(MerchantAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
