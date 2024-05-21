import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class Authdto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}
