import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Following } from '../entities/Following.entity';
import { User } from '../entities/User.entity';
import { FollowerService } from '../follower/follower.service';

@Injectable()
export class FollowingService {
  constructor(
    private followerService: FollowerService,
    @Inject('FOLLOWING_REPOSITORY')
    private followingRepo: Repository<Following>,
    @Inject('USER_REPOSITORY') private userRepo: Repository<User>,
  ) {}
  async create(userToFollow: number, user: User) {
    console.log(userToFollow);
    let userfofollow: User;
    try {
      userfofollow = await this.userRepo.findOne(userToFollow);
    } catch (e) {
      console.log(e);
    }
    if (userfofollow) {
      const following = new Following();
      following.user = userfofollow;
      await this.followingRepo.save(following);
      await this.userRepo
        .createQueryBuilder()
        .relation(User, 'following')
        .of(user)
        .add(following);

      this.followerService.create(user, userfofollow);
    }
  }
  async remove(userToUnfolloow: number, user: User) {
    let unfollow: User;
    try {
      unfollow = await this.userRepo.findOne(userToUnfolloow);
    } catch (e) {
      console.log(e);
    }
    if (unfollow) {
      await this.followingRepo
        .createQueryBuilder()
        .delete()
        .from(Following, 'following')
        .where('following.id=:id', { id: unfollow.id })
        .execute();
      this.followerService.remove(user);
    }
  }
}
