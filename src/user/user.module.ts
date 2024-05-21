import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/databseProvider/database.module';
import { FollowerService } from './follower/follower.service';
import { FollowingService } from './following/following.service';
import { FollowingController } from './following/following.controller';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { JwtAuthGuard } from './authentication/jwt-auth-guard';
import { JwtStrategy } from './authentication/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: 'JUSTFORTESTMYBROZERES',
      signOptions: { expiresIn: '1600s' },
    }),
  ],
  controllers: [
    UserController,
    FollowingController,
    ProfileController,
    AuthenticationController,
  ],
  providers: [
    {
      provide: 'APP_GUARD',
      useClass: JwtAuthGuard,
    },
    UserService,
    FollowerService,
    FollowingService,
    ProfileService,
    AuthenticationService,
    JwtAuthGuard,
    JwtStrategy,
  ],
})
export class UserModule {}
