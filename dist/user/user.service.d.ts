import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Followers } from './entities/Followers.entity';
import { Following } from './entities/Following.entity';
import { Profile } from './entities/profile.entity';
import { User } from './entities/User.entity';
export declare class UserService {
    private userRepo;
    private profileRepo;
    private followersRepo;
    private followingRepo;
    constructor(userRepo: Repository<User>, profileRepo: Repository<Profile>, followersRepo: Repository<Followers>, followingRepo: Repository<Following>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findByEmail(email: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): string;
}
