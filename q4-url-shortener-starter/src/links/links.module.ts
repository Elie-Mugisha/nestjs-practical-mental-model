import { Module } from '@nestjs/common';
import { LinksController } from './links.controller';
import { LinksService } from './links.service';

// TODO (Task 2): register providers for SLUG_GENERATOR, CLOCK and APP_CONFIG.
@Module({
  controllers: [LinksController],
  providers: [LinksService],
})
export class LinksModule {}
