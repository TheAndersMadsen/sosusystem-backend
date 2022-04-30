import { Injectable } from '@nestjs/common';
import { Address } from './entities/address.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateAddressDto } from './dto/update-address.dto';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectModel('Address') private readonly addressModel: Model<Address>,
  ) {}

  async findAll(): Promise<Array<Address>> {
    return this.addressModel.find();
  }

  async findOne(id: string): Promise<Address> {
    return this.addressModel.findOne({ _id: id });
  }

  async create(createAddressDto: CreateAddressDto): Promise<Address> {
    const newAddress = new this.addressModel(createAddressDto);

    return await newAddress.save();
  }

  async delete(id: string): Promise<Address> {
    return this.addressModel.findByIdAndRemove(id);
  }

  async update(
    id: string,
    updateAddressDto: UpdateAddressDto,
  ): Promise<Address> {
    return this.addressModel.findByIdAndUpdate(id, updateAddressDto, {
      new: true,
    });
  }
}
