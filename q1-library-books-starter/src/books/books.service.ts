import { Injectable, NotImplementedException, ConflictException, NotFoundException } from '@nestjs/common';
import { Book, Paginated } from './book.entity';
import { SEED_BOOKS } from './books.seed';
import { CreateBookDto } from './dto/create-book.dto';
import { QueryBooksDto } from './dto/query-books.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  // In-memory "database". Each app instance gets its own copy of the seed data.
  private books: Book[] = SEED_BOOKS.map((b) => ({ ...b, genres: [...b.genres] }));
  private nextId = this.books.length + 1;

  // TODO (Task 3): filter by author / genre / available and paginate.
  // Must return a Paginated<Book> (see book.entity.ts).
  findAll(query: QueryBooksDto): Book[] | Paginated<Book> {
    let filtered = this.books;

    if (query.author) {
      const authorQuery = query.author.toLowerCase();
      filtered = filtered.filter((book) => book.author.toLowerCase().includes(authorQuery))
    }

    if (query.genre) {
      const genreQuery = query.genre.toLowerCase();
      filtered = filtered.filter((book) => book.genres.some((g) => g.toLowerCase() === genreQuery))
    }

    if (query.available !== undefined) {
      filtered = filtered.filter((book) => book.available === query.available);
    }

    filtered.sort((a, b) => a.id - b.id);

    const total = filtered.length;
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const totalPages = Math.ceil(total / limit);

    const startIndex = (page - 1) * limit
    const data = filtered.slice(startIndex, startIndex + limit)

    return {
      data,
      meta: {
        total,
        page,
        limit,
        totalPages
      }
    }
  }

  // TODO (Task 4): return the book or throw a 404 "Book with id <id> not found".
  findOne(id: number): Book {
    const book = this.books.find(book => book.id === id)

    if (!book) {
      throw new NotFoundException(`Book with id ${id} not found`)
    }

    return book;
  }

  // TODO (Task 2): create the book (apply defaults, reject duplicate ISBNs with 409).
  create(dto: CreateBookDto): Book {
    const existing = this.books.find((b) => b.isbn === dto.isbn);
    if (existing) {
      throw new ConflictException(`A book with ISBN ${dto.isbn} already exists`);
    }

    const newBook: Book = {
      id: this.nextId++,
      title: dto.title,
      author: dto.author,
      isbn: dto.isbn,
      publishedYear: dto.publishedYear,
      genres: dto.genres ?? [],
      available: dto.available ?? true,
    }

    this.books.push(newBook);
    return newBook;
  }

  // TODO (Task 5): partially update a book.
  update(id: number, dto: UpdateBookDto): Book {
    const book = this.findOne(id)

    if (dto.isbn && dto.isbn !== book.isbn) {
      const conflict = this.books.find(b => b.isbn === dto.isbn && b.id !== id);
      if (conflict) {
        throw new ConflictException(`A book with ISBN ${dto.isbn} already exists`);
      }
    }

    Object.assign(book, dto);
    return book;
  }

  // TODO (Task 6): delete a book.
  remove(id: number): void {
    const index = this.books.findIndex(b => b.id === id);
    if (index === -1) {
      throw new NotFoundException(`Book with id ${id} not found`);
    }
    this.books.splice(index, 1);
  }
}
