// TODO (Task 5): every field of CreateBookDto, all optional, same validation rules.

import { PartialType } from "@nestjs/mapped-types";
import { CreateBookDto } from "./create-book.dto";

// Hint: you should not have to copy/paste the decorators.
export class UpdateBookDto extends PartialType(CreateBookDto) {}
