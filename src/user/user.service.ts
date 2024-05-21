import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { UUIDVersion } from 'class-validator';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Followers } from './entities/Followers.entity';
import { Following } from './entities/Following.entity';
import { Profile } from './entities/profile.entity';
import { User } from './entities/User.entity';
@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepo: Repository<User>,
    @Inject('PROFILE_REPOSITORY') private profileRepo: Repository<Profile>,
    @Inject('FOLLOWERS_REPOSITORY')
    private followersRepo: Repository<Followers>,
    @Inject('FOLLOWING_REPOSITORY')
    private followingRepo: Repository<Following>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userEntity = plainToClass(User, createUserDto);
    return await this.userRepo.save(userEntity);
  }
  async findAll() {
    return await this.userRepo.find({
      relations: ['profile', 'following', 'follower'],
    });
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

  async findByEmail(email: string) {
    return await this.userRepo
      .createQueryBuilder('user')
      .select()
      .where('user.email=:email', { email: email })
      .getOne();
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = plainToClass(User, updateUserDto);
    return await this.userRepo
      .createQueryBuilder()
      .update(User)
      .set(updateUser)
      .where('id=:id', { id: id })
      .execute();
  }

  remove(id: number) {
    return `This action removes a #${id} `;
  }
}
