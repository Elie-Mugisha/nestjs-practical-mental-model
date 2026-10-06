import { Controller, Get, NotImplementedException } from '@nestjs/common';
import { UsersService } from './users.service';

// TODO (Task 3): the whole controller is admin-only...
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // TODO (Task 4): ...except this route, which every authenticated user may call.
  // It returns the caller's own profile (use your @CurrentUser() decorator).
  @Get('me')
  me() {
    throw new NotImplementedException();
  }

  // BUG (Task 5): this currently leaks every user's secret token.
  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
