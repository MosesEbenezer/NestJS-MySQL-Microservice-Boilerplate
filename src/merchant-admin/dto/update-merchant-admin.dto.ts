import { PartialType } from '@nestjs/mapped-types';
import { CreateMerchantAdminDto } from './create-merchant-admin.dto';

export class UpdateMerchantAdminDto extends PartialType(CreateMerchantAdminDto) {}
