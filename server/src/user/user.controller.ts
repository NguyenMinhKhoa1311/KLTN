import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { log } from 'console';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    try{
      const newUser = await this.userService.create(createUserDto)
      return newUser;
    }
    catch(err){
      throw err;
    }
  }

  @Get('getAll')
  async findAll() {
    try{
      const users = await this.userService.findAll();
      return users;
    }
    catch(err){
      throw err;
    }
  }

  @Get('getByUserName')
  async getByEmail(@Query('userName') username: string){
    try{
      const user = await this.userService.findByUserName(username);
      return user;
    }
    catch(err){
      throw err;
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
