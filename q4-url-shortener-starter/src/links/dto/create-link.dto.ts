import { IsOptional, IsString } from 'class-validator';

// TODO (Task 1): these are placeholder rules that only "whitelist" the fields.
// Replace them with the real validation rules from README.md.
export class CreateLinkDto {
  @IsString()
  url: string;

  @IsOptional()
  customSlug?: string;

  @IsOptional()
  expiresInMinutes?: number;
}
