import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('USER_REPOSITORY') private userRepo: Repository<User>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'JUSTFORTESTMYBROZERES',
    });
  }
  async validate(payload: any) {
    return await this.userRepo.findOne(payload.sub);
  }
}
