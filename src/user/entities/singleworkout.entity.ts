import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Workout } from './workout.entity';

@Entity()
export class Exercice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 500 })
  exerciceName: string;
  @Column('text')
  sets: string;
  @Column()
  rest: string;
  @Column('int')
  reps: number;
  @Column('text')
  tempo: string;
  @ManyToOne(() => Workout, (workout) => workout.exercice)
  workout: Workout;
  @Column({ nullable: true })
  workoutId: number;
}
