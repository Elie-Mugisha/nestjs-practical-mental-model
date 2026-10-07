// TODO (Task 3): query-string parameters for GET /books
//   author?    string  (case-insensitive "contains" match)
//   genre?     string  (case-insensitive exact match on one of the book's genres)
//   available? boolean (the query string arrives as the TEXT "true" / "false")
//   page       integer >= 1, default 1

import { Transform, Type } from "class-transformer";
import { IsBoolean, IsInt, IsOptional, IsString, Max, Min } from "class-validator";

//   limit      integer 1..50, default 10
export class QueryBooksDto {
  @IsOptional()
  @IsString()
  author?: string;

  @IsOptional()
  @IsString()
  genre?: string;

  @Transform(({ value }) => {
    if (value === 'true' || value === true) return true;
    if (value === 'false' || value === false) return false;
    return value;
  })
  @IsOptional()
  @IsBoolean()
  available?: boolean;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  page: number = 1;

  @Type(() => Number)
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(50)
  limit: number = 10;
}
