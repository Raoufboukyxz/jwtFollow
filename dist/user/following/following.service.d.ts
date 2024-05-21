import { Repository } from 'typeorm';
import { Following } from '../entities/Following.entity';
import { User } from '../entities/User.entity';
import { FollowerService } from '../follower/follower.service';
export declare class FollowingService {
    private followerService;
    private followingRepo;
    private userRepo;
    constructor(followerService: FollowerService, followingRepo: Repository<Following>, userRepo: Repository<User>);
    create(userToFollow: number, user: User): Promise<void>;
    remove(userToUnfolloow: number, user: User): Promise<void>;
}
