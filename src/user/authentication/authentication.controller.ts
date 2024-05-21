import {
  Body,
  Controller,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Authdto } from '../dto/auth-dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { Public } from '../public_route_mechanisme';
import { AuthenticationService } from './authentication.service';

@Public()
@Controller('authentication')
export class AuthenticationController {
  constructor(private authService: AuthenticationService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
  @UsePipes(new ValidationPipe({ transform: true }))
  @Post('/login')
  findAll(@Body() authdto: Authdto, @Req() re) {
    console.log(re);
    return this.authService.login(authdto);
  }
}
