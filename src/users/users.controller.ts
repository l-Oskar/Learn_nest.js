import { Body, Controller, Get, NotFoundException, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers(): string {
    return 'All Users';
  }

  @Post()
  createUser(@Body() name: string) {
    if (name) {
      throw new NotFoundException('Need user name!');
    }
    console.log(name);
    return `User was created: ${name}`;
  }
}
