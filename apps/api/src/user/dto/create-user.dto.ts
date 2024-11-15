import { Gender } from '@prisma/client';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsEnum,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsPhoneNumber()
  phone: string;

  @IsEnum(Gender)
  gender?: Gender;

  @IsString()
  date_of_birth?: string;
}
