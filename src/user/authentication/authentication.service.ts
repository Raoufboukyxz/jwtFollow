import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Authdto } from '../dto/auth-dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/User.entity';
import { UserService } from '../user.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}
  async login(authdto: Authdto) {
    console.log(authdto);

    const userexist: User = await this.userService.findByEmail(authdto.email);
    if (userexist) {
      if (userexist && authdto.password == userexist.password) {
        const payload = { username: userexist.email, sub: userexist.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
      } else {
        return 'bad password';
      }
    } else {
      return 'User not found';
    }
  }
  async register(userRegister: CreateUserDto) {
    console.log(userRegister);
    let user;
    try {
      user = await this.userService.create(userRegister);
    } catch (e) {
      console.log(e.message);
      console.log(e.code);
    }
    if (user) {
      const payload = { username: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } else {
      return 'user with this email already exist';
    }
  }
}
