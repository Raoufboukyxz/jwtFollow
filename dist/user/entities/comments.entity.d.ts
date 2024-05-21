import { Workout } from './workout.entity';
import { Response } from './response.entity';
import { User } from './User.entity';
export declare class Comment {
    id: number;
    workout: Workout;
    comment: string;
    commentId: number;
    commentCreated: Date;
    user: User;
    response: Response[];
    userId: number;
    workoutId: number;
}
