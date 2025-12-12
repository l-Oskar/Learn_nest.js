import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';

type User = {
  id: number;
  name: string;
};

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.usersService.getUserById(Number(id));
  }

  @Post()
  createUser(@Body('name') name: string) {
    return this.usersService.createUser(name);
  }
}
