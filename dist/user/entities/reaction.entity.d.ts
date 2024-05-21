import { Workout } from './workout.entity';
export declare class Rating {
    id: number;
    workout: Workout;
    star: number;
    reactionAdded: Date;
    userId: number;
}
