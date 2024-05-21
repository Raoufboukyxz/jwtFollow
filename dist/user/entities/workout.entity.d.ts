import { Comment } from './comments.entity';
import { Rating } from './reaction.entity';
import { Exercice } from './singleworkout.entity';
import { User } from './User.entity';
export declare class Workout {
    id: number;
    bodyPart: string;
    goal: string;
    category: string;
    sexe: string;
    sharedDate: Date;
    description: string;
    exercice: Exercice[];
    comments: Comment[];
    rating: Rating[];
    user: User;
    userId: number;
}
