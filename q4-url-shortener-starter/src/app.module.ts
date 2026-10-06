import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LinksModule } from './links/links.module';

// TODO (Task 5): apply RequestIdMiddleware to every route
// (hint: implement NestModule and its configure(consumer) method).
@Module({
  imports: [LinksModule],
  controllers: [AppController],
})
export class AppModule {}
