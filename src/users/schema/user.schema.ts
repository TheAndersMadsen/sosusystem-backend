import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Exclude, Transform, Type } from 'class-transformer';
import { Address, AddressSchema } from '../../address/schema/address.schema';
import * as mongoose from 'mongoose';

//
// export const UserSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String,
//   isTeacher: Boolean,
// });
export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  @Exclude()
  password: string;

  @Prop({ type: AddressSchema })
  @Type(() => Address)
  address: Address;
}

export const UserSchema = SchemaFactory.createForClass(User);
