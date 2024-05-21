import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './databseProvider/database.module';
import { ProfileController } from './user/profile/profile.controller';
import { ProfileService } from './user/profile/profile.service';
import { AuthenticationService } from './user/authentication/authentication.service';
import { AuthenticationController } from './user/authentication/authentication.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [UserModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
