import { FollowingService } from './following.service';
export declare class FollowingController {
    private followingService;
    constructor(followingService: FollowingService);
    create(req: any, usertoFollow: any): Promise<void>;
    remove(req: any, userId: number): Promise<void>;
}
