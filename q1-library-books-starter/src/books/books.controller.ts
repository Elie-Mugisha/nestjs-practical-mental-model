import { Controller, Get, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { QueryBooksDto } from './dto/query-books.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query() query: QueryBooksDto) {
    return this.booksService.findAll(query);
  }

  // TODO (Task 4): GET    /books/:id
  // TODO (Task 2): POST   /books
  // TODO (Task 5): PATCH  /books/:id
  // TODO (Task 6): DELETE /books/:id
}
