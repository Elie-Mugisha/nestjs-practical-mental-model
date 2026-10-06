import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { SEED_USERS } from './users.seed';

@Injectable()
export class UsersService {
  private readonly users: User[] = SEED_USERS.map((u) => ({ ...u }));

  findAll(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  findByToken(token: string): User | undefined {
    return this.users.find((u) => u.token === token);
  }
}
