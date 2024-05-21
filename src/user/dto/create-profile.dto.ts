import { IsString, IsNotEmpty } from 'class-validator';

export class Profiledto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;
  @IsString()
  @IsNotEmpty()
  age: string;
  @IsString()
  @IsNotEmpty()
  height: string;
  @IsString()
  @IsNotEmpty()
  weight: string;
  @IsString()
  @IsNotEmpty()
  professionel: string;
  @IsString()
  @IsNotEmpty()
  league: string;
}
