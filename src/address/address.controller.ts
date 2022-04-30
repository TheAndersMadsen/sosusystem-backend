import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseInterceptors,
} from '@nestjs/common';
import { CreateAddressDto } from './dto/create-Address.dto';
import { UpdateAddressDto } from './dto/update-Address.dto';
import { AddressService } from './Address.service';
import { Address } from './entities/Address.entity';
import MongooseClassSerializerInterceptor from '../utils/mongooseClassSerializer.interceptor';

@Controller('address')
@UseInterceptors(MongooseClassSerializerInterceptor(Address))
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  async findAll(): Promise<Array<Address>> {
    return await this.addressService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Address> {
    return await this.addressService.findOne(param.id);
  }

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto): Promise<Address> {
    return await this.addressService.create(createAddressDto);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<Address> {
    return await this.addressService.delete(param.id);
  }

  @Put(':id')
  async update(
    @Body() updateAddressDto: UpdateAddressDto,
    @Param() param,
  ): Promise<Address> {
    return await this.addressService.update(param.id, updateAddressDto);
  }
}
