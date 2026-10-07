import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { QueryBooksDto } from './dto/query-books.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(@Query() query: QueryBooksDto) {
    return this.booksService.findAll(query);
  }

  // TODO (Task 4): GET    /books/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id)
  }


  
  // TODO (Task 2): POST   /books
  @Post()
  create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto)
  }
  // TODO (Task 5): PATCH  /books/:id
  // TODO (Task 6): DELETE /books/:id
}
