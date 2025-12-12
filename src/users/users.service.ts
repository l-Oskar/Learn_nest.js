import { Injectable, NotFoundException } from '@nestjs/common';

type User = {
  id: number;
  name: string;
};

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Oskar' },
  ];
  getAllUsers(): User[] {
    return this.users;
  }
  getUserById(id: number) {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException('No user with this id');
    }
    return user;
  }

  createUser(name: string) {
    const newUser = {
      id: this.users.length + 1,
      name,
    };
    this.users.push(newUser);
    return newUser;
  }
}
