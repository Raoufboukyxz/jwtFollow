import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Followers } from '../entities/Followers.entity';
import { User } from '../entities/User.entity';

@Injectable()
export class FollowerService {
  constructor(
    @Inject('FOLLOWERS_REPOSITORY')
    private followersRepo: Repository<Followers>,
    @Inject('USER_REPOSITORY') private userRepo: Repository<User>,
  ) {}
  async remove(userUnfolowingMe: User) {
    await this.followersRepo
      .createQueryBuilder()
      .delete()
      .from(Followers, 'followers')
      .where('followers.id=:id', { id: userUnfolowingMe.id })
      .execute();
  }
  async create(userFollowingMe: User, me: User) {
    const follower = new Followers();
    follower.user = userFollowingMe;
    const follow = await this.followersRepo.save(follower);
    await this.userRepo
      .createQueryBuilder()
      .relation(User, 'follower')
      .of(me)
      .add(follow);
  }
}
