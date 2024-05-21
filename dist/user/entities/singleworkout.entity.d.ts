import { Workout } from './workout.entity';
export declare class Exercice {
    id: number;
    exerciceName: string;
    sets: string;
    rest: string;
    reps: number;
    tempo: string;
    workout: Workout;
    workoutId: number;
}
