import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from './dto/create-link.dto';
import { Link } from './link.entity';

@Injectable()
export class LinksService {
  private readonly links = new Map<string, Link>();

  // TODO (Task 2): this first version works, but it cannot be tested reliably
  // (random slug, real clock, hard-coded base URL) and it ignores customSlug,
  // expiresInMinutes and slug collisions. See README.md.
  create(dto: CreateLinkDto) {
    const slug = Math.random().toString(36).slice(2, 8);
    const link: Link = {
      slug,
      url: dto.url,
      clicks: 0,
      createdAt: new Date(),
      expiresAt: null,
      lastAccessedAt: null,
    };
    this.links.set(slug, link);
    return { ...link, shortUrl: `http://localhost:3000/${slug}` };
  }
}
