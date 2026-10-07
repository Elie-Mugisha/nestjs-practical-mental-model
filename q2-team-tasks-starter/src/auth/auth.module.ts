import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

// TODO (Task 1 & 3): register your guards here so they apply to EVERY route
// of the application (hint: APP_GUARD from @nestjs/core).
@Module({
  imports: [UsersModule],
  providers: [{provide: APP_GUARD, useClass: AuthGuard}],
})
export class AuthModule {}
