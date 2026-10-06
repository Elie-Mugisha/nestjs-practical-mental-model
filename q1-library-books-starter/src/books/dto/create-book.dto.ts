// TODO (Task 2): add class-validator / class-transformer decorators
// so that every rule in README.md is enforced.
export class CreateBookDto {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genres?: string[];
  available?: boolean;
}
