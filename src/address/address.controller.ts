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

@Controller('Addresss')
@UseInterceptors(MongooseClassSerializerInterceptor(Address))
export class AddressController {
  constructor(private AddressService: AddressService) {}

  @Get()
  async findAll(): Promise<Array<Address>> {
    return await this.AddressService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<Address> {
    return await this.AddressService.findOne(param.id);
  }

  @Post()
  async create(@Body() createAddressDto: CreateAddressDto): Promise<Address> {
    return await this.AddressService.create(createAddressDto);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<Address> {
    return await this.AddressService.delete(param.id);
  }

  @Put(':id')
  async update(
    @Body() updateAddressDto: UpdateAddressDto,
    @Param() param,
  ): Promise<Address> {
    return await this.AddressService.update(param.id, updateAddressDto);
  }
}
