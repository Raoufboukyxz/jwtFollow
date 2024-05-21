import { Followers } from './Followers.entity';
import { Following } from './Following.entity';
import { Profile } from './profile.entity';
import { Workout } from './workout.entity';
import { Response } from './response.entity';
import { Comment } from './comments.entity';
export declare class User {
    id: string;
    email: string;
    password: string;
    phone: string;
    gender: string;
    profile: Profile;
    workout: Workout[];
    follower: Followers[];
    following: Following[];
    respond: Response;
    comment: Comment;
    profileId: number;
}
