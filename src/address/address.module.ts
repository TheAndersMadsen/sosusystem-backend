import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressSchema } from './schema/address.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Address', schema: AddressSchema }]),
  ],
  controllers: [],
  providers: [],
  //exports: [AddressService],
})
export class AddressModule {}
