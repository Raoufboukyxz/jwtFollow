import { Inject, Injectable } from '@nestjs/common';
import { classToClass, plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';
import { Profiledto } from '../dto/create-profile.dto';
import { UpddateProfileDto } from '../dto/update-profile.dto';
import { Profile } from '../entities/profile.entity';
import { User } from '../entities/User.entity';

@Injectable()
export class ProfileService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepo: Repository<User>,
    @Inject('PROFILE_REPOSITORY') private profileRepo: Repository<Profile>,
  ) {}
  async create(createUserDto: Profiledto, user: User) {
    const profileclass = plainToClass(Profile, createUserDto);
    const profile = await this.profileRepo.save(profileclass);
    await this.userRepo
      .createQueryBuilder()
      .relation(User, 'profile')
      .of(user)
      .set(profile);
  }
  async findOne(id: number) {
    return await this.userRepo
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.profile', 'profile')
      .leftJoinAndSelect('user.following', 'following')
      .leftJoinAndSelect('user.follower', 'follower')
      .where('user.id=:id', { id: id })
      .getOne();
  }

  async update(id: number, updateProdileDto: UpddateProfileDto) {
    const updateProfile = plainToClass(Profile, updateProdileDto);
    return await this.userRepo
      .createQueryBuilder()
      .update(Profile)
      .set(updateProfile)
      .where('id=:id', { id: id })
      .execute();
  }
}
