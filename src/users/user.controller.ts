import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findAll(): Promise<Array<User>> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param() param): Promise<User> {
    return await this.userService.findOne(param.id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.create(createUserDto);
  }

  @Delete(':id')
  async delete(@Param() param): Promise<User> {
    return await this.userService.delete(param.id);
  }

  @Put(':id')
  async update(@Body() updateUserDto: UpdateUserDto, @Param() param): Promise<User> {
    return await this.userService.update(param.id, updateUserDto);
  }
}
