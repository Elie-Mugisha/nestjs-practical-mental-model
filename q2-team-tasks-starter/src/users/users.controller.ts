import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { Roles } from '../auth/roles.decorator';
import { Role, User } from './user.entity';
import { CurrentUser } from '../auth/current-user.decorator';

// TODO (Task 3): the whole controller is admin-only...
@Roles(Role.Admin)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO (Task 4): ...except this route, which every authenticated user may call.
  // It returns the caller's own profile (use your @CurrentUser() decorator).
  @Roles()
  @Get('me')
  me(@CurrentUser() user: User) {
    const { token, ...publicUser } = user;
    return publicUser
  }

  // BUG (Task 5): this currently leaks every user's secret token.
  @Get()
  findAll() {
    // return this.usersService.findAll();
    return this.usersService.findAll().map(({ token, ...user }) => user); // token filtered out from return value
  }
}
