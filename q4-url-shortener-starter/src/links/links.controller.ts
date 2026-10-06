import { Body, Controller, Post } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}

  @Post()
  create(@Body() dto: CreateLinkDto) {
    return this.linksService.create(dto);
  }

  // TODO (Task 4): GET /links/:slug/stats
}

// TODO (Task 3): a controller that handles GET /:slug and redirects.
