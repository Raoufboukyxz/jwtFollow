import { Profiledto } from '../dto/create-profile.dto';
import { UpddateProfileDto } from '../dto/update-profile.dto';
import { ProfileService } from './profile.service';
export declare class ProfileController {
    private profileService;
    constructor(profileService: ProfileService);
    create(createUserDto: Profiledto, req: any): Promise<void>;
    findOne(id: number): Promise<import("../entities/User.entity").User>;
    update(id: string, updateUserDto: UpddateProfileDto): Promise<import("typeorm").UpdateResult>;
}
