import { Repository } from 'typeorm';
import { Profiledto } from '../dto/create-profile.dto';
import { UpddateProfileDto } from '../dto/update-profile.dto';
import { Profile } from '../entities/profile.entity';
import { User } from '../entities/User.entity';
export declare class ProfileService {
    private userRepo;
    private profileRepo;
    constructor(userRepo: Repository<User>, profileRepo: Repository<Profile>);
    create(createUserDto: Profiledto, user: User): Promise<void>;
    findOne(id: number): Promise<User>;
    update(id: number, updateProdileDto: UpddateProfileDto): Promise<import("typeorm").UpdateResult>;
}
