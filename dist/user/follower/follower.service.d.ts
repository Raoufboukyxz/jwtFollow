import { Repository } from 'typeorm';
import { Followers } from '../entities/Followers.entity';
import { User } from '../entities/User.entity';
export declare class FollowerService {
    private followersRepo;
    private userRepo;
    constructor(followersRepo: Repository<Followers>, userRepo: Repository<User>);
    remove(userUnfolowingMe: User): Promise<void>;
    create(userFollowingMe: User, me: User): Promise<void>;
}
